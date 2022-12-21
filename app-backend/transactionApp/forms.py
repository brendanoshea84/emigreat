from django import forms


class TransactionForm(forms.Form):
    idTo = forms.CharField(label='idTo', max_length=100, required=True)
    idFrom = forms.CharField(label='idFrom', max_length=100, required=True)
    dateTime = forms.DateTimeField(
        label='dateTimeCreted', format='%Y-%m-%d %H:%M')
    amount = forms.FloatField(
        label='amount', required=True, min_value=0, max_value=1000, step_size=0.01)
