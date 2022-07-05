<?php

namespace App\Entity;

use App\Repository\ComentarioRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ComentarioRepository::class)
 */
class Comentario
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $fecha;

    /**
     * @ORM\Column(type="text")
     */
    private $texto;

    /**
     * @ORM\OneToMany(targetEntity=Publicaciones::class, mappedBy="comentario")
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

    public function getFecha(): ?\DateTimeInterface
    {
        return $this->fecha;
    }

    public function setFecha(\DateTimeInterface $fecha): self
    {
        $this->fecha = $fecha;

        return $this;
    }

    public function getTexto(): ?string
    {
        return $this->texto;
    }

    public function setTexto(string $texto): self
    {
        $this->texto = $texto;

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
            $publicacione->setComentario($this);
        }

        return $this;
    }

    public function removePublicacione(Publicaciones $publicacione): self
    {
        if ($this->publicaciones->removeElement($publicacione)) {
            // set the owning side to null (unless already changed)
            if ($publicacione->getComentario() === $this) {
                $publicacione->setComentario(null);
            }
        }

        return $this;
    }
}
