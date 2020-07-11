import React from 'react'
import GoldInput from './components/goldInput'

export default class myGold extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rupiah: 0,
            gram: 0
        }
    }
    hanleSubmit = (e) => {
        e.preventDefault()
        alert(`Nilai ${this.state.gram} gram = Rp. ${this.state.rupiah}`)
    }
    onChangeRupiah = (rupiah) => {
        let gram = (parseFloat(rupiah*0.01)/8500).toString();
        this.setState({rupiah, gram})
    }
    onChangeGram = (gram) => {
        let rupiah = (parseFloat(gram/0.01)*8500).toString();
        this.setState({rupiah, gram})
    }
    render(){
        const {rupiah, gram} = this.state
        return(
            <div className="container">
                <div className="card bg-light mb-3">
                <div className="card-header">Gold Converter</div>
                <div className="card-body">
                    <div className="card-title">Harga Emas 8500/0.01 gram</div>
                    <form onSubmit={this.hanleSubmit}>
                        <GoldInput label="gr" gold={gram} onChangeGold={this.onChangeGram}/>
                        <GoldInput label="Rp" gold={rupiah} onChangeGold={this.onChangeRupiah}/>
                        <br/>
                        <button
                        type="submit"                        
                        className="btn btn-dark"
                        >
                        Convert!
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}