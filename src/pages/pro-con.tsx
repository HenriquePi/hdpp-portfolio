import React, { useState } from "react";
import { cnb } from 'cnbuilder';
import "./style/_pro-con.scss";
import { SSL_OP_NETSCAPE_CA_DN_BUG } from "constants";

enum Category{
    PRO = "Pro",
    CON = "Con",
    NONE = "..."
}
type PCTile = {
    subject:string;
    detail:string;
    weight: number;
    category: Category;
}

const PCGen = () =>{
    const zeroTen: number[] = [];
    for (let i = 0 ; i < 10 ; i++) zeroTen.push(i+1);

    const pcTileDefault: PCTile = {subject:"", detail:"", weight:0, category:Category.NONE};

    const [pcTileState, setPCTileState] = useState<PCTile>({...pcTileDefault}); 
    const [conTileList, setConTileList] = useState<PCTile[]>([]);
    const [proTileList, setProTileList] = useState<PCTile[]>([]);

    const pushToList = (pcTileInfo:PCTile) => {
        if (pcTileInfo.category === Category.CON) {
            return setConTileList([...conTileList, pcTileInfo]);
        }
        setProTileList([...proTileList, pcTileInfo]);

    };
    const clearPCTileState = () => {
        setPCTileState({...pcTileDefault});
    };


    const isStringValid = (args:string) => {
        return args.length > 0;
    };
    const isNumberValid = (args:number) => {
        return args > 0;
    };
    const isCategoryValid = (args:Category) => {
        return args !== Category.NONE;
    };
    const isFormValid = () => {
        return isNumberValid(pcTileState.weight) && isStringValid(pcTileState.detail) && isCategoryValid(pcTileState.category) && isStringValid(pcTileState.subject);
    };

    const updateWeight = (index:number, weight: string, category: Category) => {
        if (category === Category.CON) {
            const conList = [...conTileList];
            conList[index].weight = Number.parseInt(weight);
            return setConTileList(conList);
        }
        const proList = [...proTileList];
        proList[index].weight = Number.parseInt(weight);
        setProTileList(proList);
    };

    return(
        <div className="PCGen">
            <p>
                {isNumberValid(pcTileState.weight).toString()}{pcTileState.weight}/
                {isStringValid(pcTileState.subject).toString()}{pcTileState.subject}/
                {isCategoryValid(pcTileState.category).toString()}{pcTileState.category}/
                {isStringValid(pcTileState.detail).toString()}{pcTileState.detail}
            </p>
            <div className="columns is-centered">
                <div className="column">
                    <h1 className="title is-1 has-text-centered">Pros Cons {"&"} List Creator</h1>
                </div>
                {/* 
                Drag n drop library to move items from column to column
                item in rendered onto the list with dropdown weight
                calculate weight 
                display the likely path + difference in weight e.g "Negative action desired by 5 points"
                local storage for results, give key for access
                */}
            </div>
            <div className="columns is-centered">
                <div className="column is-7">
                    <div className="box">
                        <form>
                            <div className="field has-addons">
                                <p className="control">
                                    {/* "select is-danger" */}
                                <span className={cnb("select", {"is-danger": !isNumberValid(pcTileState.weight)})}>
                                    <select onChange={(event) => setPCTileState({...pcTileState, weight: parseInt(event.target.value)})}>
                                        <option value="0">Select Weight</option>
                                        {
                                            zeroTen.map((num) => <option value={num} key={`option-${num}`}>{num}</option>)
                                        }
                                    </select>
                                </span>
                                </p>
                                <p className="control is-expanded">
                                    <input 
                                        className={cnb("input", {"is-danger": !isStringValid(pcTileState.subject)}, {"is-success": isStringValid(pcTileState.subject)})} 
                                        type="text"
                                        placeholder="Pro or Con subject"
                                        onChange={(event) => setPCTileState({...pcTileState, subject: event.target.value})}
                                        />
                                </p>
                                <p className="control">
                                    <span className={cnb("select", {"is-danger": !isCategoryValid(pcTileState.category)}, {"is-success": isCategoryValid(pcTileState.category)})}>
                                        <select 
                                        onChange={
                                            (event) => {
                                                setPCTileState({...pcTileState, category: event.target.value as Category})}}>
                                            <option value={Category.NONE}>Select P/C</option>
                                            <option value={Category.PRO}>Pro</option>
                                            <option value={Category.CON}>Con</option>
                                        </select>
                                    </span>
                                </p>
                            </div>

                            <div className="field">
                                <textarea 
                                    className={cnb("textarea", {"is-danger": !isStringValid(pcTileState.detail)}, {"is-success": !isStringValid(pcTileState.detail)})} 
                                    placeholder="Subject elaboration" 
                                    rows={3}
                                    onChange={(event) => setPCTileState({...pcTileState, detail: event.target.value})}
                                    />
                            </div>
                            {/* <div className="button has-addons is-right"> */}
                                <button 
                                    onClick={() => pushToList(pcTileState)}
                                    disabled={!isFormValid}
                                    type="button" 
                                    className="button is-primary"
                                    >Add To {pcTileState.category}</button>
                                <button 
                                    onClick={clearPCTileState} 
                                    type="reset" 
                                    className="button is-light"
                                    >Clear</button>
                            {/* </div> */}
                        </form>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="column is-1"></div>
                <div className="column">
                    <div className="box">
                        <h1 className="has-text-centered">Pro</h1>
                        {proTileList.map(({weight, category, subject, detail}, index) => 
                            <div className="box">
                                
                                <select value={weight} onChange={(event) => updateWeight(index, event.target.value, category)}>
                                    {
                                        zeroTen.map((num) => <option value={num} key={`option-${num}`}>{num}</option>)
                                    }
                                </select>
                                {/* <div className="field">
                                    <div className="control">
                                        <input 
                                            className="input" 
                                            type="number" 
                                            value={weight} onChange={(e) => updateWeight(index, e.target.value, category)} />
                                    </div>
                                </div> */}
                                <h2>{subject}</h2>
                                <p>{detail}</p>               
                            </div>)}
                    </div>
                </div>
                <div className="column">
                    <div className="box">
                    <h1 className="has-text-centered">Con</h1>
                    {conTileList.map((pcTile, index) => 
                            <div className="box">
                                {/* <select onChange={(event) => setPCTileState({...pcTileState, weight: parseInt(event.target.value)})}>
                                    <option value="0">Select Weight</option>
                                    {
                                        zeroTen.map((num) => <option value={num} key={`option-${num}`}>{num}</option>)
                                    }
                                </select> */}
                                <div className="field">
                                    <div className="control">
                                        <input 
                                            className="input" 
                                            type="number" 
                                            value={pcTile.weight} onChange={(e) => updateWeight(index, e.target.value, pcTile.category)} />
                                    </div>
                                </div>
                                <h2>{pcTile.subject}</h2>
                                <p>{pcTile.detail}</p>               
                            </div>)}
                    </div>
                </div>
                <div className="column is-1"></div>
            </div>
        </div>
    )
};
export default PCGen;