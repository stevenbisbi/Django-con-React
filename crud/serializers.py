from rest_framework import serializers
from .models import ResearchGroup, Author, ArticleType, Article, TechnicalReport, CongressProceedings, ScientificJournal

class ResearchGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResearchGroup
        fields = '__all__'
        
class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'
    
class ArticleTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleType
        fields = '__all__'
        
class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
        
class TechnicalReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechnicalReport
        fields = '__all__'

class CongressProceedingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CongressProceedings
        fields = '__all__'

class ScientificJournalSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScientificJournal
        fields = '__all__'
