<?php

namespace App\Entity;

use App\Repository\ValoracionesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ValoracionesRepository::class)
 */
class Valoraciones
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $numero;

    /**
     * @ORM\ManyToOne(targetEntity=Publicaciones::class, inversedBy="valoraciones")
     */
    private $publicacion;

    /**
     * @ORM\OneToMany(targetEntity=Publicaciones::class, mappedBy="valoracion")
     */
    private $publicaciones;

    public function __construct()
    {
        $this->publicaciones = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumero(): ?int
    {
        return $this->numero;
    }

    public function setNumero(int $numero): self
    {
        $this->numero = $numero;

        return $this;
    }

    public function getPublicacion(): ?Publicaciones
    {
        return $this->publicacion;
    }

    public function setPublicacion(?Publicaciones $publicacion): self
    {
        $this->publicacion = $publicacion;

        return $this;
    }

    /**
     * @return Collection<int, Publicaciones>
     */
    public function getPublicaciones(): Collection
    {
        return $this->publicaciones;
    }

    public function addPublicacione(Publicaciones $publicacione): self
    {
        if (!$this->publicaciones->contains($publicacione)) {
            $this->publicaciones[] = $publicacione;
            $publicacione->setValoracion($this);
        }

        return $this;
    }

    public function removePublicacione(Publicaciones $publicacione): self
    {
        if ($this->publicaciones->removeElement($publicacione)) {
            // set the owning side to null (unless already changed)
            if ($publicacione->getValoracion() === $this) {
                $publicacione->setValoracion(null);
            }
        }

        return $this;
    }
}
