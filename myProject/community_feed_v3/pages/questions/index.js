import styled from 'styled-components'


const QuestionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%
`


function Questions() {
    return(
        <QuestionContainer>
            <h2>Questions</h2>
        </QuestionContainer>
    )
}


export default Questions;