from models.produto import Produto
from config import db

class ProdutoRepository:

    def add(self, produto):
        db.session.add(produto)
        db.session.commit()
        return produto

    def get_all(self):
        return Produto.query.all()

    def get_by_id(self, produto_id):
        return Produto.query.get(produto_id)

    def update(self):
        db.session.commit()

    def delete(self, produto):
        db.session.delete(produto)
        db.session.commit()
