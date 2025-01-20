from rest_framework import viewsets
from .models import ResearchGroup, Author, ArticleType, Article, TechnicalReport, CongressProceedings, ScientificJournal
from .serializers import ResearchGroupSerializer, AuthorSerializer, ArticleTypeSerializer, ArticleSerializer, TechnicalReportSerializer, CongressProceedingsSerializer, ScientificJournalSerializer
# Create your views here.

class ResearchGroupViewSet(viewsets.ModelViewSet):
    serializer_class = ResearchGroupSerializer
    queryset = ResearchGroup.objects.all()

class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

class ArticleTypeViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleTypeSerializer
    queryset = ArticleType.objects.all()
    
class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    
class TechnicalReportViewSet(viewsets.ModelViewSet):
    serializer_class = TechnicalReportSerializer
    queryset = TechnicalReport.objects.all()

class CongressProceedingsViewSet(viewsets.ModelViewSet):
    serializer_class = CongressProceedingsSerializer
    queryset = CongressProceedings.objects.all()
    
class ScientificJournalViewSet(viewsets.ModelViewSet):
    serializer_class = ScientificJournalSerializer
    queryset = ScientificJournal.objects.all()