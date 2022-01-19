import { Layout } from "components";
import { useState } from "react";

export const CadastroProdutos: React.FC = () => {
  const [sku, setSku] = useState("");
  const [preco, setPreco] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  const submit = () => {
    const produto = {
      sku,
      preco,
      nome,
      descricao,
    };
  };

  return (
    <Layout titulo="Produtos">
      <div className="columns">
        <div className="field column is-half">
          <label className="label" htmlFor="inputSku">
            SKU: *
          </label>
          <div className="control">
            <input
              className="input"
              value={sku}
              onChange={(event) => setSku(event.target.value)}
              id="inputSku"
              placeholder="Digite o SKU do produto"
            ></input>
          </div>
        </div>
        <div className="field column is-half">
          <label className="label" htmlFor="inputPreco">
            Preço: *
          </label>
          <div className="control">
            <input
              className="input"
              value={preco}
              onChange={(event) => setPreco(event.target.value)}
              id="inputPreco"
              placeholder="Digite o Preço do produto"
            ></input>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="field column is-full">
          <label className="label" htmlFor="inputNome">
            Nome: *
          </label>
          <div className="control">
            <input
              className="input"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              id="inputNome"
              placeholder="Digite o Nome do produto"
            ></input>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="field column is-full">
          <label className="label" htmlFor="inputDesc">
            Descrição: *
          </label>
          <div className="control">
            <textarea
              className="textarea"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
              id="inputDesc"
              placeholder="Digite a Descrição detalhada do produto"
            />
          </div>
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button  onClick={submit} className="button is-link">Salvar</button>
        </div>
        <div className="control">
          <button className="button">Voltar</button>
        </div>
      </div>
    </Layout>
  );
};
