from django.shortcuts import render

def home(request):

  if request.method == 'GET':
        
      if request.user.is_authenticated:
        return render(request,'templates/index.html')

      else :
        return render(request,'templates/index.html')


