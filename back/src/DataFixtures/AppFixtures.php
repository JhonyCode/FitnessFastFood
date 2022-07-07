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
        $usuario->setPerfil('perfil');
        $manager->persist($usuario);



                for ($k = 0; $k < 6; $k++) {
                    $publicaciones = new Publicaciones();
                    $publicaciones->setEstado(1);
                    $publicaciones->setImagen(1);
                    $publicaciones->setResumen('Resumen Número' . $k);
                    $publicaciones->setTitulo('Título Número' . $k);
                    $publicaciones->setSlug('publicacion' . uniqid());
                    $publicaciones->setUsuario($usuario);
                    $publicaciones->setValorNutricional('Valor' . $k);
                    $publicaciones->setIngredientes('Ingrediente' . $k);
                    $manager->persist($publicaciones);

                    for ($r = 0; $r < 1; $r++) {
                        $valoraciones = new Valoraciones();
                        $valoraciones->setNumero($r);
                        $valoraciones->setPublicacion($publicaciones);
                        $manager->persist($valoraciones);
                    }
                }
            
        

        $manager->flush();
    }
}
