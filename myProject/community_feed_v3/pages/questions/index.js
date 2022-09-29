import styled from 'styled-components'
// import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import Pagination from '../../components/Pagination'
import Head from 'next/head'


const CardLink = styled.a`
    text-decoration: none;
`

const QuestionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%
`



function Questions( {questions, hasMore, page}) {
    // const [loading, setLoading] = useState(false)
    // const [questions, setQuestions] = useState([])
    // const [hasMore, setHasMore]  = useState(false)



    // const router = useRouter();
    // const { page } = router.query;


    // useEffect( () => {
    //     async function fetchData() {
    //         const data = await fetch(`https://api.stackexchange.com/2.2/questions?${page ? `page=${page}&` : '' }order=desc&sort=hot&tagged=reactjs&site=stackoverflow`);

    //         const result = await data.json();

    //         if(result) {
    //             setQuestions(result.items)
    //             setHasMore(result.has_more)
    //             setLoading(false);
    //         }
    //     }
    //     fetchData();
    // }, [page]);



    return (
        <>
        <Head>
            <title>Questions</title>
        </Head>
        <QuestionContainer>
            <h2>Questions</h2> 
                        <div>
                            {questions.map( (question)=> (
                                <Link 
                                    key={question.question_id}
                                    href={`/questions/${question.question_id}`}
                                >
                                    <CardLink>
                                        <Card 
                                            title={question.title}
                                            views={question.view_count}
                                            answers={question.answer_count}
                                        />
                                    </CardLink>
                                </Link>
                            ))}
                        </div>
                        <Pagination currentPage={parseInt(page) || 1} hasMore={hasMore} />

        </QuestionContainer>
        </>
    )
}

export async function getServerSideProps(context) {
    const {page} = context.query;

    const data = await fetch(`https://api.stackexchange.com/2.2/questions?${page ? `page=${page}&` : '' }order=desc&sort=hot&tagged=reactjs&site=stackoverflow`);

    const result = await data.json();

    return {
        props: {
            questions: result.items,
            hasMore: result.has_more,
            page: page || 1
        }
    }
}



export default Questions;