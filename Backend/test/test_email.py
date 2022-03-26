import pytest
from fastapi.testclient import TestClient
from ..main import app

client = TestClient(app)

def test_email() :
    response = client.post("/miscellaneous/sendCodeEmail?to_email=ferenandoruiz@gmail.com&lang=es")
    assert response.status_code == 200