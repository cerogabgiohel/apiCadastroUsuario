# apiCadastroUsuario
Atividade 02 de Programação WEB II do Instituto Federal de Minas Gerais

**Listagem dos usuários: GET localhost:3000/users**
A listagem dos usuários só estará disponível após o cadastro de algum usuário. Se ela for requisitada sem haver a presença de algum usuário, será mostrado um vetor vazio: [].
Para obtê-la, deve-se utilizar a requisição "GET" e digitar a URL especificada acima (localhost:3000/users)

**Obtenção de usuário específico: GET localhost:3000/users/ID**
Para encontrar um usuário específico, deve-se utilizar a requisição "GET" e digitar a URL especificada acima, com o número do ID do usuário ao final, por exemplo: "localhost:3000/users/1" no caso em que se deseja buscar o segundo usuário cadastrado, cujo ID será 1.
Caso o usuário buscado não tenha sido adicionado ou ele tenha sido removido, será retornada a seguinte mensagem: "O usuário buscado não está cadastrado" 

**Cadastramento de usuário: POST localhost:3000/users**
Para realizar o cadastramento de um usuário, deve se digitar, no JSON, conforme exemplo abaixo:
{
  "nome": "Fulano de tal"
  "email": "fulano@detal.com"
  "endereco": "rua dos bobos, 0"
}
O ID será adicionado automaticamente
Deve-se utilizar a requisição "POST" e digitar a URL acima especificada (localhost:3000/users). 

**Edição de usuário: PUT localhost:3000/users/ID**
Para realizar a edição das informações de algum usuário, deve-se utilizar a requisição "PUT", digitar a URL mostrada acima, com o número do ID do usuário que terá as informações editadas, por exemplo: localhost:3000/users/3 (caso deseja realizar a edição das informações do quarto usuário cadastrado, cujo ID será 3) e digitar as novas informações de nome, email e endereço, conforme exemplo abaixo, no JSON:
{
  "nome": "Editado"
  "email": "edicoes@editadas.com"
  "endereco": "rua das edições, 30"
}
Caso o ID buscado tenha sido removido ou não foi adicionado, será mostrada a seguinte mensagem: "Erro! Usuário não encontrado!".

**Remoção de usuário: DELETE localhost:3000/users/ID**
Para realizar a remoção de um usuário, deve-se utilizar a requisição "DELETE", digitar a URL mostrada acima, com o número do ID do usuário que será removido, por exemplo: localhost:3000/users/4 (caso deseja realizar a edição das informações do quinto usuário cadastrado, cujo ID será 4). 
Caso o ID digitado seja de um usuário que não foi adicionado ou foi removido, será mostrada a seguinte mensagem: "Erro! Usuário não encontrado!".
