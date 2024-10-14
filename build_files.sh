echo "Build Start"

python 3.14 -m pip install -r requirements.txt
python 3.14 manage.py collectstatic --noinput --clear

echo "Build end"