import React from 'react'

export default class GoldInput extends React.Component {
    handleChange = (e) => {
        this.props.onChangeGold(e.target.value)
    }

    render() {
        const {label, gold} = this.props

        return (
            <>
                <label>
                    {label === 'Rp' ? 'Rupiah:' : 'Gram:'}
                    <input type="number" className="form-control" value={gold} onChange={this.handleChange} />
                </label>
            </>
        )
    }
}