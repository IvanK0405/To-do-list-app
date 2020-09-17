import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
    state= {
        isOpen: false
    }


    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({isOpen: true})} >
                    Открыть совет
                    </button>

                {this.state.isOpen &&(
                <div className='modal'>
                    <div className='modal-body'>
                        <h1>Совет</h1>
                        <p>Многие думают, что ведение списков — удел бабушек и дедушек, страдающих от проблем с памятью. На самом же деле, эта привычка может оказаться полезной для людей любого возраста. Ведь списки бывают разные, и это не обязательно перечень покупок.</p>
                        <button onClick={() => this.setState({isOpen: false})} >Закрыть</button>
                </div>
            </div>
            )}

            </React.Fragment>
        )
    }
}