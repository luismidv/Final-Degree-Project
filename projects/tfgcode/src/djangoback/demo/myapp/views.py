from django.shortcuts import render, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

def home(request):
    return render(request,"")

class ReactView(APIView):
    #
    def get(self):
        output = "Hola buenos dias"
        return Response(output)

    def post(self):
        output = "Hola buenos dias"
        return Response(output)
    
