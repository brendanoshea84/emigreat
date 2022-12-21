from django.test import TestCase
from .models import TransactionHistory

# Create your tests here.


class TransactionTestCase(TestCase):
    def setUp(self):
        TransactionHistory.objects.create(
            idTo="1234567890",
            idFrom="0987654321",
            dateTime="2022-12-21 10:30",
            amount="50.00")

    def test_idTo_has_value(self):
        TransactionHistory.objects.get(idTo="1234567890")
        self.assertEqual(len(TransactionHistory.idTo), 10)
        self.assertFalse(len(TransactionHistory.idTo), 0)

    def test_idFrpm_has_value(self):
        TransactionHistory.objects.get(idFrom="0987654321")
        self.assertEqual(len(TransactionHistory.idTo), 10)
        self.assertFalse(len(TransactionHistory.idTo), 0)

    def test_dateTime_has_value(self):
        TransactionHistory.objects.get(dateTime="2022-12-21 10:30")
        self.assertFalse(len(TransactionHistory.dateTime), 0)

    def test_amount_has_value(self):
        TransactionHistory.objects.get(amount="50.00")
        self.assertFalse(len(TransactionHistory.amount), 0)
