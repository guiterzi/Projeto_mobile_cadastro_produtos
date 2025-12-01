from flask import request, jsonify
from config import app
from services.produto_service import ProdutoService

produto_service = ProdutoService()

@app.route('/produtos', methods=['GET'])
def listar_produtos():
    produtos = produto_service.listar_produtos()
    resultado = [{
        "id": p.id,
        "nome": p.nome,
        "quantidade": p.quantidade,
        "preco": p.preco
    } for p in produtos]
    return jsonify(resultado), 200

@app.route('/produtos', methods=['POST'])
def criar_produto():
    data = request.json
    nome = data.get('nome')
    quantidade = data.get('quantidade')
    preco = data.get('preco')

    if not nome or quantidade is None or preco is None:
        return jsonify({"error": "Dados incompletos"}), 400

    produto = produto_service.criar_produto(nome, quantidade, preco)
    return jsonify({
        "id": produto.id,
        "nome": produto.nome,
        "quantidade": produto.quantidade,
        "preco": produto.preco
    }), 201
