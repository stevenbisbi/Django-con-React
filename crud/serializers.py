from rest_framework import serializers
from .models import ResearchGroup, Author, ArticleType, Article, TechnicalReport, CongressProceedings, ScientificJournal

class ResearchGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResearchGroup
        fields = '__all__'
        
class AuthorSerializer(serializers.ModelSerializer):
    group_name = serializers.CharField(source='id_group.name' + " - " + 'id_group.line' , read_only=True)
    class Meta:
        model = Author
        fields = '__all__'
    
class ArticleTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleType
        fields = '__all__'
        
class ArticleSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='id_author.name', read_only=True)
    tipo_name = serializers.CharField(source='id_tipo.tipo', read_only=True)
    publication_date = serializers.DateField(format='%d/%m/%Y')
    
    class Meta:
        model = Article
        fields = '__all__'
        
class TechnicalReportSerializer(serializers.ModelSerializer):
    date = serializers.DateField(format='%d/%m/%Y')
    
    class Meta:
        model = TechnicalReport
        fields = '__all__'

class CongressProceedingsSerializer(serializers.ModelSerializer):
    date = serializers.DateField(format='%d/%m/%Y')
    
    class Meta:
        model = CongressProceedings
        fields = '__all__'

class ScientificJournalSerializer(serializers.ModelSerializer):
    date= serializers.DateField(format='%d/%m/%Y')
    
    class Meta:
        model = ScientificJournal
        fields = '__all__'
