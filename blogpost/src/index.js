import React from 'react';
import ReactDOM from 'react-dom';
import {faker} from '@faker-js/faker';
import ApproveCard from './Components/ApproveCard';
import CommentDetails from './Components/CommentDetails';

const App = () => {
    return(
        <div className='ui comments'>
            <ApproveCard>
                <CommentDetails author='Vimal' time='Today at 6:00 PM' avatar={faker.image.avatar()}/>
            </ApproveCard>
            <ApproveCard>
                <CommentDetails author='Tamizh' time='Today at 4:00 PM' avatar={faker.image.avatar()}/>
            </ApproveCard>
            <ApproveCard>
                <CommentDetails author='Tamizh' time='Today at 4:00 PM' avatar={faker.image.avatar()}/>    
            </ApproveCard>
        </div>
        
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)