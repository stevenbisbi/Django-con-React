from django.contrib import admin
from .models import Article, ArticleType, Author, ResearchGroup, CongressProceedings, TechnicalReport, ScientificJournal 
# Register your models here.

admin.site.register(Article)
admin.site.register(ArticleType)
admin.site.register(Author)
admin.site.register(ResearchGroup)
admin.site.register(CongressProceedings)
admin.site.register(TechnicalReport)
admin.site.register(ScientificJournal)
