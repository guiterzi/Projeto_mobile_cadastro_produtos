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

@app.route('/produtos/<int:produto_id>', methods=['PUT'])
def atualizar_produto(produto_id):
    data = request.json

    produto = produto_service.obter_produto(produto_id)
    if not produto:
        return jsonify({"error": "Produto não encontrado"}), 404

    nome = data.get('nome')
    quantidade = data.get('quantidade')
    preco = data.get('preco')

    produto_atualizado = produto_service.atualizar_produto(
        produto,
        nome=nome,
        quantidade=quantidade,
        preco=preco
    )

    return jsonify({
        "id": produto_atualizado.id,
        "nome": produto_atualizado.nome,
        "quantidade": produto_atualizado.quantidade,
        "preco": produto_atualizado.preco
    }), 200

@app.route('/produtos/<int:produto_id>', methods=['DELETE'])
def deletar_produto(produto_id):
    produto = produto_service.obter_produto(produto_id)
    if not produto:
        return jsonify({"error": "Produto não encontrado"}), 404
    produto_service.deletar_produto(produto)
    return jsonify({"message": "Produto deletado com sucesso"}), 200