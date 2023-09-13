import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cartao() {
  return (
    <div className="banner2">
      <div>
        <h2 id="funcoes">Conheça nossas funcionalidades</h2>
      </div>
      <div className="linha">
        <Card>
          <Card.Img variant="top" src="https://picsum.photos/200" />
          <Card.Body>
            <Card.Title>Pricing</Card.Title>
            <Card.Text className="">
              Nosso sistema lê os dados de venda de seu mercado e calculamos o
              novo pricing de produtos para você! Não apenas atualizações comuns
              dos preços dos produtos mas também baseados em seus produtos mais
              vendidos...
            </Card.Text>
            <Button href='/cadastro' variant="primary">Ver mais</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src="https://picsum.photos/200" />
          <Card.Body>
            <Card.Title>Tributos</Card.Title>
            <Card.Text className="">
              Sem mais contar tudo repetidamente! Nosso sistema também calcula
              seus tributos para facilitar no seu pagamento de impostos
              mensalmente! Todo o ganho faturado que será taxado para impostos
              podem ser visualizado facilmente.
            </Card.Text>
            <Button href='/cadastro' variant="primary">Ver mais</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default Cartao;
