from django.db import models

class task(models.Model):
    task_title = models.CharField(max_length=200,null = True)
    due_date = models.DateField(null = True)
    employee_name = models.CharField(max_length=200,null = True)
    employee_email = models.EmailField(null = True)
    employee_phone = models.CharField(max_length=200, null = True)
    solved = models.BooleanField(default= False)

    def __str__(self):
        return self.task_title