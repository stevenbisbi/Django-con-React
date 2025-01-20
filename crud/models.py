from django.db import models

# Create your models here.

class ResearchGroup(models.Model):
    name = models.CharField(max_length=100)
    line = models.CharField(max_length=60)
    CATEGORIA_CHOICES = [
        ('Categoría A', 'A'),
        ('Categoría B', 'B'),
        ('Categoría C', 'C'),
        ('Categoría D', 'D'),
        ('Categoría E', 'E'),
    ]
    categoria = models.CharField(max_length=12, choices=CATEGORIA_CHOICES)
    
    class Meta:
        verbose_name = 'Grupo de Investigación'
        verbose_name_plural = 'Grupos de Investigación'
        
    def __str__(self) -> str:
        return self.name
    
class Author(models.Model):
    name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    nationality = models.CharField(max_length=50)
    id_group = models.ForeignKey(ResearchGroup, on_delete=models.CASCADE)
    
    class Meta:
        verbose_name = 'Autor'
        verbose_name_plural = 'Autores'
        
    def __str__(self) -> str:
        return f'{self.name} {self.last_name}'
    
class ArticleType(models.Model):
    DEFAULT = 'default_value'
    INFORME_TECNICO = 'Informe tecnico'
    ACTA_CONGRESO = 'Acta de congreso'
    REVISTA_CIENTIFICA = 'Revista cientifica'
    
    TIPO_CHOICES = [
        (DEFAULT, 'Default Value'),
        (INFORME_TECNICO, 'Informe Técnico'),
        (ACTA_CONGRESO, 'Acta de Congreso'),
        (REVISTA_CIENTIFICA, 'Revista Científica'),
    ]
    
    tipo = models.CharField(
        max_length=100,
        choices=TIPO_CHOICES,
        default=DEFAULT,
    )
    
    def __str__(self) -> str:
        return self.tipo
    
class Article(models.Model):
    title = models.CharField(max_length=200)
    publication_date = models.DateField()
    id_author = models.ForeignKey(Author, on_delete=models.CASCADE)
    id_tipo = models.ForeignKey(ArticleType, on_delete=models.CASCADE)
    
    class Meta:
        verbose_name = 'Artículo'
        verbose_name_plural = 'Artículos'
        
    def __str__(self) -> str:
        return self.title
    
class TechnicalReport(models.Model):
    id_articulo = models.ForeignKey(Article, on_delete=models.CASCADE)
    number = models.CharField(max_length=10)
    publishing_center = models.CharField(max_length=100)
    date = models.DateField()
    
    class Meta:
        verbose_name = 'Informe Técnico'
        verbose_name_plural = 'Informes Técnicos'
        
    def __str__(self) -> str:
        return self.number
    
class CongressProceedings(models.Model):
    id_article = models.ForeignKey(Article, on_delete=models.CASCADE)
    edition =models.IntegerField()
    city = models.CharField(max_length=100)
    tipo = models.CharField(max_length=100)
    country = models.CharField(max_length=50)
    year_firstedition = models.IntegerField()
    frecuency = models.CharField(max_length=100)
    date = models.DateField()
    
    class Meta:
        verbose_name = 'Acta de Congreso'
        verbose_name_plural = 'Actas de Congreso'
        
    def __str__(self) -> str:
        return self.number 
    
class ScientificJournal(models.Model):
    id_article = models.ForeignKey(Article, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    editor = models.CharField(max_length=100)
    start_year = models.DateField(max_length=50)
    periodicity = models.CharField(max_length=50)
    topic = models.DateField(max_length=50)
    edicion_number = models.IntegerField()
    pages = models.IntegerField()
    pusblication_year = models.DateField()
    
    class Meta:
        verbose_name = 'Revista Científica'
        verbose_name_plural = 'Revistas Científicas'
        
    def __str__(self) -> str:
        return f"Revista {self.name} - {self.edicion_number}"