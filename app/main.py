from sqlalchemy import orm
from sqlalchemy import create_engine
engine = create_engine('sqlite:///./ilostthegame.db')

from sqlalchemy import Column, Integer, String


Base = orm.declarative_base()
class MyTable(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    username = Column(String)
    password = Column(Integer)
    value = Column(Integer)

Base.metadata.create_all(engine)

from sqlalchemy.orm import sessionmaker



# receive input from javascript frontend
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/submit_text')
async def submit_text(request: Request):
    data = await request.json()
    text = data.get("text")

    # open session
    Session = sessionmaker(bind=engine)
    session = Session()

    # add data
    new_row = MyTable(username=text, password=0, value=1)
    session.add(new_row)
    session.commit()

    # query date
    retrieved_row = session.query(MyTable).filter_by(name=text).first()
    print(retrieved_row)
    session.close()

    print('Received:', text)
    return{"message": f"Text '{text}' received"}



@app.get('/get_data')
def get_data():
    Session = sessionmaker(bind=engine)
    session = Session()
    rows = session.query(MyTable).all()
    result = [{"id": r.id, "name": r.username, "value": r.value} for r in rows]
    print(result)
    session.close()
    return result


