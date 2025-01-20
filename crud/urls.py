from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from crud import views

router = routers.DefaultRouter()
router.register(r'groups', views.ResearchGroupViewSet, 'group')
router.register(r'authors', views.AuthorViewSet, 'author')
router.register(r'article_types', views.ArticleTypeViewSet, 'article_type')
router.register(r'articles', views.ArticleViewSet, 'article')
router.register(r'technical_reports', views.TechnicalReportViewSet, 'technical_report')
router.register(r'congress_proceedings', views.CongressProceedingsViewSet, 'congress_proceedings')
router.register(r'scientific_journals', views.ScientificJournalViewSet, 'scientific_journal')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path("docs/", include_docs_urls(title="Gestor de Artículos")),
]