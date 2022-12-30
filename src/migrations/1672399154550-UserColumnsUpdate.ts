import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserColumnsUpdate1672399154550 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        ALTER TABLE "user" RENAME COLUMN "firstname" TO "firstName";
        ALTER TABLE "user" RENAME COLUMN "lastname" TO "lastName";
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        ALTER TABLE "user" RENAME COLUMN "firstName" TO "firstname";
        ALTER TABLE "user" RENAME COLUMN "lastName" TO "lastname";
      `,
    );
  }
}
