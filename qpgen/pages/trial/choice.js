const Choice = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan='3' className="width2-own">SL.NO</th>
                        <th>Questions</th>
                        <th className="width2-own">CO</th>
                        <th className="width2-own">BT</th>
                        <th className="width2-own">Year</th>
                    </tr>
                </thead>
                <tr>
                    <td rowSpan="10">1</td>
                </tr>
                <tr>
                    <td rowSpan='2'>a</td>
                    <td>i</td>  
                    <td>hello</td>
                    <td>CO123</td>
                    <td>k1</td>
                    <td>2020</td>
                </tr>
                <tr>
                    <td>ii</td>
                    <td>hello</td>
                    <td>CO123</td>
                    <td>k1</td>
                    <td>2020</td>
                </tr>
                <tr>
                    <td rowSpan='2'>b</td>
                    <td>i</td>
                    <td>hello</td>
                    <td>CO123</td>
                    <td>k1</td>
                    <td>2020</td>
                </tr>
                <tr>
                    <td>ii</td>
                    <td>hello</td>
                    <td>CO123</td>
                    <td>k1</td>
                    <td>2020</td>
                </tr>
                <tr>
                    <td colSpan='6' className="text-center">or</td>
                </tr>
                <tr>
                    <td rowSpan='2'>a</td>
                    <td>i</td> 
                    <td>hello</td>
                    <td>CO123</td>
                    <td>k1</td>
                    <td>2020</td>
                </tr>
                <tr>
                    <td>ii</td>
                    <td>hello</td>
                    <td>CO123</td>
                    <td>k1</td>
                    <td>2020</td>
                </tr>
                <tr>
                    <td rowSpan='2'>b</td>
                    <td>i</td> 
                    <td>hello</td>
                    <td>CO123</td>
                    <td>k1</td>
                    <td>2020</td>
                </tr>
                <tr>
                    <td>ii</td>
                    <td>hello</td>
                    <td>CO123</td>
                    <td>k1</td>
                    <td>2020</td>
                </tr>
            </table>
        </div>
    );
}

export default Choice;