import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { config } from 'dotenv';

config();

export class CreateArtist1676927825460 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createDatabase(process.env.DB_NAME, true);
    await queryRunner.createTable(
      new Table({
        name: 'artist',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'grammy',
            type: 'boolean',
            default: false,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('artist');
  }
}
