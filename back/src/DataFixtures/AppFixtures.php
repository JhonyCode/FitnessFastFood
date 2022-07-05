<?php

namespace App\DataFixtures;

use App\Entity\Categoria;
use App\Entity\Comentario;
use App\Entity\Valoraciones;
use App\Entity\Publicaciones;
use App\Entity\Usuario;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $usuario = new Usuario();
        $usuario->setEmail('user@user.com');
        $usuario->setPassword('$2y$13$q72Y0UknX8yvIzbV9CE8lO3PoajiHVQM7r8LbLkXp5ewQKImMk3zK');
        $usuario->setNombre('usuario');
        $usuario->setPerfil('administrador');
        $manager->persist($usuario);

        for ($i = 0; $i < 5; $i++) {
            $categoria = new Categoria();
            $categoria->setNombre('Categoria Número ' . $i);
            $categoria->setDescripcion('Descripción Número ' . $i);
            $manager->persist($categoria);

            for ($j = 0; $j < 2; $j++) {
                $comentario = new Comentario();
                $comentario->setTexto('Texto de prueba' . $j);
                $comentario->setFecha(new \DateTime());
                $manager->persist($comentario);

                for ($k = 0; $k < 1; $k++) {
                    $publicaciones = new Publicaciones();
                    $publicaciones->setCategoria($categoria);
                    $publicaciones->setComentario($comentario);
                    $publicaciones->setEstado(1 || 2);
                    $publicaciones->setResumen('Resumen Número' . $k);
                    $publicaciones->setTitulo('Título Número' . $k);
                    $publicaciones->setSlug('publicacion' . uniqid());
                    $publicaciones->setCategoria($categoria);
                    $publicaciones->setUsuario($usuario);
                    $publicaciones->setImagen('Imagen.jpg');
                    $publicaciones->setIngredientes('Ingrediente' . $k);
                    $manager->persist($publicaciones);

                    for ($r = 0; $r < 1; $r++) {
                        $valoraciones = new Valoraciones();
                        $valoraciones->setNumero($r);
                        $valoraciones->setPublicacion($publicaciones);
                        $manager->persist($valoraciones);
                    }
                }
            }
        }

        $manager->flush();
    }
}
