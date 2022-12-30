import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserCreate1672397826792 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" (
        id integer GENERATED ALWAYS AS IDENTITY NOT NULL,
        email varchar NOT NULL,
        password VARCHAR NOT NULL,
        firstName VARCHAR NOT NULL, 
        lastName VARCHAR NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
