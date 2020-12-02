import React, { useState } from "react";
import { cnb } from "cnbuilder";
import { FaTrash, FaEdit } from "react-icons/fa";
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
    const [pcValue, setPCValue] = useState<number>(0);
    const [isEvaluate, setIsEvaluate] = useState(false);
    const [proCon, setProCon] = useState<Category>(Category.NONE)

    const pushToList = (pcTileInfo:PCTile) => {
        if (pcTileInfo.category === Category.CON) {
            return setConTileList([...conTileList, pcTileInfo]);
        }
        setProTileList([...proTileList, pcTileInfo]);

    };

    const clearPCTileState = () => {
        setPCTileState({...pcTileDefault, category: pcTileState.category});
    };
    const clearPCTileList = () => {
        setProTileList([]);
        setConTileList([]);
        setIsEvaluate(false);
    }

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
    const printTableList = (listToPrint:PCTile[]) => {
        return(
        listToPrint.map(({weight, category, subject, detail}, index) => 
            <div className="tile is-child box">
                <div className="columns">
                    <div className="column is-3">
                        <div className="select">
                            <select value={weight} onChange={(event) => updateWeight(index, event.target.value, category)}>
                                {
                                    zeroTen.map((num) => <option value={num} key={`option-${num}${category}${index}`}>{num}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className="column is-offset-7">
                        <a onClick={() => editTileData(index, category)}><FaEdit /></a>
                    </div>
                    <div className="column">
                        <a onClick={() => removeFromList(index, category)}><FaTrash /></a>
                    </div>
                </div>                
                <h2 className="subtitle">{subject}</h2>
                <p>{detail}</p>               
            </div>)
        );
    };
    const removeFromList = (index:number, category: Category) => {
        setIsEvaluate(!((conTileList.length + proTileList.length) === 1));
        if (category === Category.CON) {
            const conList = [...conTileList];
            conList.splice (index, 1);
            return setConTileList(conList);
        }
        const proList = [...proTileList];
        proList.splice (index, 1);
        return setProTileList(proList);
    };
    const editTileData = (index:number, category: Category) => {

    };
    const evaluatePCList = () => {
        const proEvaluation = proTileList.reduce((proTotal, currentVal) => proTotal + currentVal.weight, 0);
        const conEvaluation = conTileList.reduce((proTotal, currentVal) => proTotal + currentVal.weight, 0);
        const evaluation = proEvaluation - conEvaluation;
        setPCValue(evaluation);
        console.log("evallist before", pcValue, proEvaluation, conEvaluation, evaluation);
        setIsEvaluate(true);
    }
    const displayEvaluation = () => {
        let proCon:Category;
        if (pcValue !== 0) {
            if (pcValue > 0) proCon = Category.PRO;
            else proCon = Category.CON
            return(
                <div className="tile is-child box">
                    <h1 className="title">{proCon}cede (by {Math.abs(pcValue)})</h1>
                </div>                    
            );
        }
        return(
            <div className="tile is-child box">
                <h1 className="title">Both sides have equal merit</h1>
                <p className="subtitle">Perhaps try adding more items, or review the weight of each item</p>
            </div>  
        );            
    }

    return(
        <div className="PCGen">
            <p>{pcTileState.weight.toString()}{pcTileState.category.toString()}</p>
            <div className='columns column'></div>
            <div className="columns is-centered">
                <div className="column">
                    <h1 className="title is-1 has-text-centered">Pros Cons {"&"} List Creator</h1>
                </div>
                {/* 
                Drag n drop library to move items from column to column
                COMP    *item in rendered onto the list with dropdown weight
                COMP    *calculate weight 
                COMP    *display the likely path + difference in weight e.g "Negative action desired by 5 points"
                COMP    *delete button on tiles
                edit button on tiles
                50%     align eval+reset buttons
                local storage for results, give key for access
                */}
            </div>
            <div className="columns is-centered">
                <div className="column is-10">
                    <div className="box">
                        <form>
                            <div className="field has-addons">
                                <p className="control">
                                    <span className={cnb("select", {"is-danger": !isCategoryValid(pcTileState.category)}, {"is-success": isCategoryValid(pcTileState.category)})}>
                                        <select 
                                            onChange={
                                                (event) => {
                                                    setPCTileState({...pcTileState, category: event.target.value as Category})
                                                    }}
                                            value={pcTileState.category}>
                                            <option value={Category.NONE}>Select P/C</option>
                                            <option value={Category.PRO}>Pro</option>
                                            <option value={Category.CON}>Con</option>
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
                                    <span className={cnb("select", {"is-danger": !isNumberValid(pcTileState.weight)})}>
                                        <select onChange={(event) => setPCTileState({...pcTileState, weight: parseInt(event.target.value)})}>
                                            <option value="0">Select Weight</option>
                                            {
                                                zeroTen.map((num) => <option value={num} key={`option-${num}`}>{num}</option>)
                                            }
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
                            <div className="columns">   
                                <div className="column is-1">
                                    <span className="field has-addons">
                                        <button 
                                            onClick={() => {pushToList({...pcTileState})}}
                                            disabled={!isFormValid()}
                                            type="button" 
                                            className="button is-primary"
                                            >Add To {pcTileState.category}</button>
                                        <button 
                                            onClick={clearPCTileState} 
                                            type="reset" 
                                            className="button is-light"
                                            >Clear</button>
                                    </span>
                                </div>
                                <div className="column is-offset-9 is-narrow">
                                    <span className="field has-addons">
                                        <button
                                            onClick={() => evaluatePCList()}
                                            disabled={proTileList.length + conTileList.length === 0}
                                            type="button"
                                            className="button is-dark"
                                            >Evaluate</button>
                                        <button 
                                            onClick={clearPCTileList} 
                                            type="button" 
                                            className="button is-light"
                                            >Reset</button>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            {
            isEvaluate && (                                    
            <div className="tile is-ancestor has-text-centered">                                    
                <div className="tile is-parent"></div>                               
                <div className="tile is-parent">                                  
                    {displayEvaluation()}
                </div>
                <div className="tile is-parent"></div> 
            </div>  
            ) 
            }                                 
            <div className="tile is-ancestor is-center">
                <div className="tile is-1"></div>
                <div className="tile is-vertical is-parent">
                    <h1 className="has-text-centered title">Pro</h1>

                    {printTableList(proTileList)}

                </div>
                <div className="tile is-1"></div>                            
                <div className="tile is-vertical is-parent">
                    <h1 className="has-text-centered title">Con</h1>
            
                    {printTableList(conTileList)}

                </div>
                <div className="tile is-1"></div>
            </div>
            <div className='columns column'></div>
        </div>
    )
};
export default PCGen;