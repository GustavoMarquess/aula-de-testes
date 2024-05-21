import { render } from "@testing-library/react"
import {Formulario} from "./Formulario"
import userEvent from '@testing-library/user-event'



describe('no formulario',()=>{
    const mockAoSubmeter = jest.fn();
test('Se os campos estiverem vazios, o botão deve estar desabilitado',() => {
    //ASSERT - AQUI ORGANIZAMOS AS VARIAVEIS DE TESTE
    //importa funções e renderiza o componente Formulário
    const {getByPlaceholderText,getByRole} = render(<Formulario aoSubmeter={mockAoSubmeter}/>)

    //busca imputs via placeholder
    const inputNome = getByPlaceholderText('Insira o nome do filme')
    const inputAnoDeLancamento = getByPlaceholderText('Digite o ano de lançamento')
    
    //caputa do botão adicionar
    const botaoAdicionar = getByRole('button');
    //-----------------------------------------------------//
    //ACT - AQUI ACONTECE A SIMULAÇÃO DAS AÇÕES DE TESTE
    expect (inputNome).toBeInTheDocument()
    expect (inputAnoDeLancamento).toBeInTheDocument()

    expect (botaoAdicionar).toBeDisabled()

    //ASSERT - AQUI TESTA EXECUÇÕES E RESULTADOS OBTIDOS 
})

test('se os inputs estiverem prenchidos, o botão deve estar habilitado', async () => {
    const { getByPlaceholderText, getByRole } = render(<Formulario aoSubmeter={mockAoSubmeter}/>)
    
    const inputNome = getByPlaceholderText('Insira o nome do filme')
    const inputAnoDeLancamento = getByPlaceholderText('Digite o ano de lançamento')
    const botaoAdicionar = getByRole('button')

    await userEvent.type(inputNome, 'Interestelar')
    await userEvent.type(inputAnoDeLancamento, '2014')

    await userEvent.click(botaoAdicionar)

    expect(botaoAdicionar).toBeEnabled()

})
})