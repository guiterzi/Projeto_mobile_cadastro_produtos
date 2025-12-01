from models.produto import Produto
from repositories.produto_repository import ProdutoRepository

class ProdutoService:
    def __init__(self):
        self.repo = ProdutoRepository()

    def criar_produto(self, nome, quantidade, preco):
        produto = Produto(nome=nome, quantidade=quantidade, preco=preco)
        return self.repo.add(produto)

    def listar_produtos(self):
        return self.repo.get_all()

    def obter_produto(self, produto_id):
        return self.repo.get_by_id(produto_id)

    def atualizar_produto(self, produto, nome=None, quantidade=None, preco=None):
        if nome:
            produto.nome = nome
        if quantidade is not None:
            produto.quantidade = quantidade
        if preco is not None:
            produto.preco = preco
        self.repo.update()
        return produto

    def deletar_produto(self, produto):
        self.repo.delete(produto)
