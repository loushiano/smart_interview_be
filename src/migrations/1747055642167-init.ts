import { MigrationInterface, QueryRunner } from "typeorm";
import * as bcrypt from 'bcrypt';

export class Init1747055642167 implements MigrationInterface {
    name = 'Init1747055642167'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`lname\` varchar(255) NULL, \`fname\` varchar(255) NULL, \`email\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        const salt = await bcrypt.genSalt();
        await queryRunner.query(`INSERT INTO \`users\` (\`id\`, \`password\`, \`lname\`, \`fname\`, \`email\`) VALUES ('1', '${await bcrypt.hash('password', 10)}', 'Doe', 'John', 'john.doe@example.com')`);
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
