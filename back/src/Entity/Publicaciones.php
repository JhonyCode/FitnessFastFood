<?php

namespace App\Entity;

use App\Repository\PublicacionesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PublicacionesRepository::class)
 */
class Publicaciones
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
    private $estado;

    /**
     * @ORM\Column(type="text")
     */
    private $resumen;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $slug;

    /**
     * @ORM\Column(type="text")
     */
    private $titulo;

    /**
     * @ORM\OneToMany(targetEntity=Valoraciones::class, mappedBy="publicacion")
     */
    private $valoraciones;

    /**
     * @ORM\ManyToOne(targetEntity=Categoria::class, inversedBy="publicaciones")
     */
    private $categoria;

    /**
     * @ORM\ManyToOne(targetEntity=Comentario::class, inversedBy="publicaciones")
     */
    private $comentario;

    /**
     * @ORM\ManyToOne(targetEntity=Usuario::class, inversedBy="publicaciones")
     */
    private $usuario;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $imagen;

    /**
     * @ORM\ManyToOne(targetEntity=Valoraciones::class, inversedBy="publicaciones")
     */
    private $valoracion;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $ingredientes;

    public function __construct()
    {
        $this->valoraciones = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEstado(): ?int
    {
        return $this->estado;
    }

    public function setEstado(int $estado): self
    {
        $this->estado = $estado;

        return $this;
    }

    public function getResumen(): ?string
    {
        return $this->resumen;
    }

    public function setResumen(string $resumen): self
    {
        $this->resumen = $resumen;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getTitulo(): ?string
    {
        return $this->titulo;
    }

    public function setTitulo(string $titulo): self
    {
        $this->titulo = $titulo;

        return $this;
    }

    /**
     * @return Collection<int, Valoraciones>
     */
    public function getValoraciones(): Collection
    {
        return $this->valoraciones;
    }

    public function addValoracione(Valoraciones $valoracione): self
    {
        if (!$this->valoraciones->contains($valoracione)) {
            $this->valoraciones[] = $valoracione;
            $valoracione->setPublicacion($this);
        }

        return $this;
    }

    public function removeValoracione(Valoraciones $valoracione): self
    {
        if ($this->valoraciones->removeElement($valoracione)) {
            // set the owning side to null (unless already changed)
            if ($valoracione->getPublicacion() === $this) {
                $valoracione->setPublicacion(null);
            }
        }

        return $this;
    }

    public function getCategoria(): ?Categoria
    {
        return $this->categoria;
    }

    public function setCategoria(?Categoria $categoria): self
    {
        $this->categoria = $categoria;

        return $this;
    }

    public function getComentario(): ?Comentario
    {
        return $this->comentario;
    }

    public function setComentario(?Comentario $comentario): self
    {
        $this->comentario = $comentario;

        return $this;
    }

    public function getUsuario(): ?Usuario
    {
        return $this->usuario;
    }

    public function setUsuario(?Usuario $usuario): self
    {
        $this->usuario = $usuario;

        return $this;
    }

    public function getImagen(): ?string
    {
        return $this->imagen;
    }

    public function setImagen(string $imagen): self
    {
        $this->imagen = $imagen;

        return $this;
    }

    public function getValoracion(): ?Valoraciones
    {
        return $this->valoracion;
    }

    public function setValoracion(?Valoraciones $valoracion): self
    {
        $this->valoracion = $valoracion;

        return $this;
    }

    public function getIngredientes(): ?string
    {
        return $this->ingredientes;
    }

    public function setIngredientes(string $ingredientes): self
    {
        $this->ingredientes = $ingredientes;

        return $this;
    }
}
