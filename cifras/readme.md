# Demonstração - Cifras

**Demonstração - Cifras** é uma ferramenta  desenvolvida para demonstrar o funcionamento de dois tipos comuns de criptografia: a **Cifra de César** e a **Cifra de Substituição Cíclica**. O site foi criado para ajudar estudantes e entusiastas de criptografia a entenderem melhor esses conceitos através de uma interface simples e intuitiva.

## Funcionalidades

- **Cifra de César:** Permite ao usuário criptografar um texto simples utilizando um deslocamento específico no alfabeto. O deslocamento pode ser ajustado conforme necessário para observar os efeitos dessa técnica de criptografia.
  
- **Cifra de Substituição Cíclica:** Oferece a opção de utilizar uma ou duas cifras de substituição. Quando duas cifras são escolhidas, a substituição é alternada entre as duas cifras com base na posição das letras no texto (posições pares e ímpares).

## Como Usar

1. **Escolha o Algoritmo de Criptografia:**
   - Selecione a **Cifra de César** ou a **Cifra de Substituição Cíclica** no menu dropdown.

2. **Cifra de César:**
   - Se escolher a **Cifra de César**, insira o texto simples na caixa de entrada.
   - Defina o valor de deslocamento (shift) desejado.
   - Clique no botão **Cifrar** para ver o texto cifrado na caixa de saída.

3. **Cifra de Substituição Cíclica:**
   - Se escolher a **Cifra de Substituição Cíclica**, insira o texto simples na caixa de entrada.
   - Selecione o número de cifras de substituição (1 ou 2).
     - **1 Cifra:** Insira a cifra de substituição no campo correspondente.
     - **2 Cifras:** Insira as duas cifras de substituição nos campos correspondentes. As posições pares do texto serão cifradas com a primeira cifra, enquanto as posições ímpares serão cifradas com a segunda.
   - Clique no botão **Cifrar** para ver o texto cifrado na caixa de saída.

4. **Visualize o Resultado:**
   - O texto cifrado será exibido na caixa de texto de saída. Você pode comparar o texto original com o texto cifrado para entender melhor como o algoritmo escolhido transforma o texto.

## Exemplos Práticos

- **Cifra de César com Shift de 3:**
  - Texto simples: "ABCD"
  - Texto cifrado: "DEFG"

- **Cifra de Substituição Cíclica com 2 Cifras:**
  - Texto simples: "HELLO"
  - Cifra 1: "QWERTYUIOPASDFGHJKLZXCVBNM"
  - Cifra 2: "MNBVCXZLKJHGFDSAPOIUYTREWQ"
  - Texto cifrado: "QSTNK"

## Sobre

Este projeto foi desenvolvido com o objetivo de fornecer uma ferramenta prática para o ensino e aprendizado de conceitos básicos de criptografia. Ele pode ser usado em aulas, workshops, ou de forma autodidata para explorar as propriedades dessas cifras.

## Contribuições

Contribuições são bem-vindas! Se você encontrar algum bug ou tiver sugestões de melhorias, por favor, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
