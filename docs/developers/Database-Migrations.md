# Persistence

A'therys plugins all use SQL for persisting various game objects. They all inherit from 
AtherysCore and depend on it for this functionality ( among other things ). They do this via a 
library called `Hibernate`, which is known as an Object-Relational Mapper ( ORM ) and is 
included in our core plugin.

Were it not for Hibernate, the persistence layer of our plugins would be very complicated and 
very messy, making it much harder to maintain and change. This is what ORMs are good at: 
simplifying the parts of the code responsible for storing and accessing data to and from an SQL 
database.

A class which is meant to be persisted in the database is known as an `Entity`. Entities are all 
annotated with JPA ( Java Persistence API ), making them cross-compatible with other ORMs ( not 
just Hibernate ). If changes need to be applied to an entity's structure, its fields must be 
modified and thus so must its annotations. 

This presents an issue: when we load up the plugin after these changes have been applied, how do 
we map the new fields on the entity to the old columns in the table in the database? The answer 
is not simple, and in fact, very few ORMs ( if any ) have managed to solve this problem fully. 
Hibernate attempts to solve this via a property which can be passed to it called `hbm2ddl.auto`.
If its value is set to `update`, the library will attempt to analyze the entities from the code 
and compare them to their corresponding tables in the database. If any differences are found, it 
will attempt to resolve them, by creating new columns in the tables and other such.

This approach, while useful for development, is not reliable for production environments. The 
Hibernate strategy will sometimes result in tables either not being modified properly, or being 
rendered incompatible with their code equivalents, meaning the mappings will be unsuccessful and 
will likely lead to a crash.

The remedy to these issues is to go back to a simpler way of doing things.

## Database Migrations

Database Migrations are a way to update the schema of a database deterministically, without 
having to rely on Hibernate magic to keep our schemas up-to-date with the code entities. The 
theory goes, that executing a series of migration scripts ( starting with the very creation of 
the table being migrated, and going to the very last change ) will always produce the same state 
in the database schema.

### Conventions for A'therys Database Migration Scripts

* All A'therys plugins have their migrations scripts saved under the `src/resources/sql/migrations` folder of the corresponding project, and they are included as part of the compiled jar.
* All migration scripts are placed in the same folder ( **not** sub-folders ), and use the following naming convention: `YYYY-MM-DD-N-{PROJECT_ID}-{DESCRIPTION}.sql` ( # )
    * `YYYY-MM-DD` is the date at which the script was created
    * `N` is the index of the script for this date, starting at `0`
    * `{PROJECT_ID}` is the ID of the plugin in `UpperCamelCase`
    * `{DESCRIPTION}` is a brief explanation of what the script does, in `Upper-Kebab-Case`
* All scripts should be able to be executed repeatedly without having compounding effects on the state of the database



#### Name Examples

The reasoning behind the naming conventions of the migration scripts is simple.
The date in the front is not required to identify which date the script was executed on.
That's done automatically whenever the script is first run on the database, and is stored in
the `AtherysMigrations` table ( along with the name of the script and its contents ).

The reason for prepending the script with a date is so that they can be properly ordered,
which is of **utmost importance**. Scripts must **ALWAYS** be executed in the order that they
were created in. New scripts, knowingly or not, will always depend on the state of the database
from the last migration. The only way to ensure scripts are run in their proper order is to
order them via their file names, which in this case is done with the prepended date and index.

```
2020-01-01-0-AtherysRPG-Create-PlayerCharacter-Table.sql
2020-03-23-0-AtherysTown-Add-Town-Bank-Column.sql
2020-04-03-0-AtherysBattlegrounds-Remove-TeamMember-Rank-Column.sql
2020-04-03-1-AtherysBattlegrounds-Add-TeamMember-Rank-Column.sql
2020-04-03-2-AtherysQuests-Modify-Quester-Column.sql
```

#### Script Examples

What the last point means is that all scripts should have safeguards baked into them,
to ensure that multiple executions don't produce the same effect over and over again. An
example of this might be when adding a column, check to be sure that column doesn't exist yet.

**Good example:**
```sql
ALTER TABLE atherys.TeamMember ADD COLUMN IF NOT EXISTS rank_position INTEGER;
```

**Bad example:**
```sql
ALTER TABLE atherys.TeamMember ADD COLUMN rank_position INTEGER;
```

The problem with the second script is that it will attempt to add the `rank_position` column 
without regard for whether it exists already or not. This will produce an error ( or, with 
some database implementations, may even create a duplicate column ). 