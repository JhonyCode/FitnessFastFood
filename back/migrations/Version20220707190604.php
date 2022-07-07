<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220707190604 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categoria (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(255) NOT NULL, descripcion VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contacto (id INT AUTO_INCREMENT NOT NULL, usuario_id INT DEFAULT NULL, nombre VARCHAR(255) NOT NULL, mensaje VARCHAR(255) NOT NULL, INDEX IDX_2741493CDB38439E (usuario_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE publicaciones (id INT AUTO_INCREMENT NOT NULL, categoria_id INT DEFAULT NULL, usuario_id INT DEFAULT NULL, valoracion_id INT DEFAULT NULL, estado INT NOT NULL, resumen LONGTEXT NOT NULL, slug VARCHAR(255) NOT NULL, titulo LONGTEXT NOT NULL, imagen VARCHAR(255) NOT NULL, ingredientes VARCHAR(255) NOT NULL, valor_nutricional LONGTEXT DEFAULT NULL, INDEX IDX_A3A706C03397707A (categoria_id), INDEX IDX_A3A706C0DB38439E (usuario_id), INDEX IDX_A3A706C0D29AA1AC (valoracion_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE refresh_tokens (id INT AUTO_INCREMENT NOT NULL, refresh_token VARCHAR(128) NOT NULL, username VARCHAR(255) NOT NULL, valid DATETIME NOT NULL, UNIQUE INDEX UNIQ_9BACE7E1C74F2195 (refresh_token), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE usuario (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, nombre VARCHAR(255) NOT NULL, perfil LONGTEXT NOT NULL, UNIQUE INDEX UNIQ_2265B05DE7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE valoraciones (id INT AUTO_INCREMENT NOT NULL, publicacion_id INT DEFAULT NULL, numero INT NOT NULL, INDEX IDX_408506679ACBB5E7 (publicacion_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE contacto ADD CONSTRAINT FK_2741493CDB38439E FOREIGN KEY (usuario_id) REFERENCES usuario (id)');
        $this->addSql('ALTER TABLE publicaciones ADD CONSTRAINT FK_A3A706C03397707A FOREIGN KEY (categoria_id) REFERENCES categoria (id)');
        $this->addSql('ALTER TABLE publicaciones ADD CONSTRAINT FK_A3A706C0DB38439E FOREIGN KEY (usuario_id) REFERENCES usuario (id)');
        $this->addSql('ALTER TABLE publicaciones ADD CONSTRAINT FK_A3A706C0D29AA1AC FOREIGN KEY (valoracion_id) REFERENCES valoraciones (id)');
        $this->addSql('ALTER TABLE valoraciones ADD CONSTRAINT FK_408506679ACBB5E7 FOREIGN KEY (publicacion_id) REFERENCES publicaciones (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE publicaciones DROP FOREIGN KEY FK_A3A706C03397707A');
        $this->addSql('ALTER TABLE valoraciones DROP FOREIGN KEY FK_408506679ACBB5E7');
        $this->addSql('ALTER TABLE contacto DROP FOREIGN KEY FK_2741493CDB38439E');
        $this->addSql('ALTER TABLE publicaciones DROP FOREIGN KEY FK_A3A706C0DB38439E');
        $this->addSql('ALTER TABLE publicaciones DROP FOREIGN KEY FK_A3A706C0D29AA1AC');
        $this->addSql('DROP TABLE categoria');
        $this->addSql('DROP TABLE contacto');
        $this->addSql('DROP TABLE publicaciones');
        $this->addSql('DROP TABLE refresh_tokens');
        $this->addSql('DROP TABLE usuario');
        $this->addSql('DROP TABLE valoraciones');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
