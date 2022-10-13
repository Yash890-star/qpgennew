const dynamicChoice = () => {


    let a
    let choice = 1
    let options = {
        1: {
            yes: 1,
            no: 2
        },
        2: {
            yes: 1,
            no: 2
        },
        3: {
            yes: 1,
            no: 2
        },
        4: {
            yes: 1,
            no: 2
        }
    }
    let colspan = 0
    let str = ''

    function getColspan() {
        if (choice == 1) {
            for (const key in options) {
                colspan += options[key].no
            }
            colspan += 2
            console.log(colspan)
        }
    }
    function createMainCell() {
        str = <tr><td rowSpan={colspan}>1</td></tr>
    }
    function createChoiceCell() {
        
    }
    function addQuestion() {
        getColspan();
        createMainCell();
        if(choice == 1){
            createChoiceCell();
        }
    }


    getColspan();
    return (
        <div>
            <table>
                <thead className="">
                    <tr className="">
                        <th colSpan='3' className="width2-own">SL.NO</th>
                        <th className="">Questions</th>
                        <th className="width2-own">CO</th>
                        <th className="width2-own">BT</th>
                        <th className="width2-own">Year</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
}

export default dynamicChoice;