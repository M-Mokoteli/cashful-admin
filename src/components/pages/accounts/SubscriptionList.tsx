import React, { useEffect, useState } from 'react'
import MyCard from '../../layout/common/MyCard'
import Spacing from '../../layout/form/Spacing'
import Table from '../../layout/form/Table'
import Title from '../../layout/form/Title'
import { iUserInfo } from './Accounts'
import { Modal, Button } from "@milon27/react-modal";

interface iAccountList {
    searching: boolean
    pendingList: iUserInfo[]
    reviewedList: iUserInfo[]
    setInfo: React.Dispatch<React.SetStateAction<iUserInfo>>
}
var data = [
    { "Load": "asdadada",
    "First": "Jill Dupre",
    "Last": "Jill Duprse",
    "Term": "rt",
    "Account":"yh",
    "Intrest":"xc",
    "Total":"2022",
    }];


export default function SubscriptionList({ searching = false, pendingList = [], setInfo, reviewedList = [] }: iAccountList) {
    const [show, setShowa] = useState(data);
    const [showContent, setShowContent] = useState(true)
    const [showDetails, setShowDetails] = useState(false);
    const [item, setItem] = useState(null as any);
    const onDetailsClick =(item: any)=>{
      console.log(item);
      setItem(item);
    setShowDetails(true);
    }
    useEffect(() => {
        console.log(show);
      }, []);
    return (
        <MyCard>
            <div className='Subsmain'>
                <Title text='Search Result' isSubtitle />
                <Spacing />
                <Table
                    noShadow={true}
                    header="Load Date,First Name,Last Name,Term,Account,Intrest,Total Repayble, Action"
                    items={[
                        ...show.map((item, i) => {
                          return {
                            Load: item?.Load,
                            First: item?.First,
                            Last: item?.Last,
                            Term: item?.Term,
                            Account: item?.Account,
                            Intrest: item?.Intrest,
                            Total: item?.Total,
                            Action:(
                                <Button
                                    onClick={() => {
                                        onDetailsClick(item)
                                    } } title="Get Auth"                                />
                                
                              ),

                          };}),
                        ]}
                    hideOption={true}
                />
            </div>
            <Spacing />
            <Spacing />
            <div className='modeName'>
            
            <Modal   title={'Moses Kenwood'} onClose={() => {
        setShowContent(false)
        console.log("closing the modal");
      }} show={showDetails}
        setShow={setShowDetails} 
            footer={
                <>
                  <Button onClick={() => setShowDetails(false)}  title="Charge card" />
                </>
              }
            >
              <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className='col-span-1 border rounded-md p-4 circleDataMain'>
                   
                   <h6 className='fontSizes'> Outstanding Amount</h6>
                   <div className='flex justify-between items-center gap-2 circleData'>
                       <input value="RS 400.00"/>
                        </div>
                        <Button  onClick={() => setShowDetails(false)} title="Submit" />
                        <p className="paraM">Loan Date</p>
                        <h5 className='headingData'>4 April 2022</h5>
                        </div>
                        <div className='col-span-1 border rounded-md p-4'>
                   
                        <h6 className='fontSizes'>Next Instalment</h6>
                        <div className='flex justify-between items-center gap-2 circleDataTwo'>
                        RS 400.00
                        </div>
                        <p className="paraM">Next Instalment Date</p>
                        <h5 className='headingData'>4 April 2022</h5>
                       
                        </div>
                        <div className='col-span-1 border rounded-md p-4'>
                   
                        <p className="paraM paraMs">status: true<br></br>
message: Bin resolved<br></br>

bin: 539983<br></br>
brand: Mastercard<br></br>
sub brand: <br></br>
country code: NG<br></br>
country name: Nigeria<br></br>
card type: DEBIT<br></br>
bank: Guaranty Trust Bank<br></br>
linked bank id: 9</p>
                       
                       
                        </div>
                        

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">

                        <div className='col-span-1 border rounded-md'>
                            <h5 className='headingData'>Repayment Schedule</h5>
                            <table width="100%" className='tableData'>
                                <tr><th>Due Date</th><th>Amount Due</th><th>Amount Due</th></tr>
                            <tr><td>4 April 2022</td><td>4 April 2022</td><td>4 April 2022</td></tr>
                            </table>
                            </div>

                            <div className='flex justify-between items-center gap-2 circleData bottomInput'>
                       <input value="RS 400.00"/>
                        </div>
                            </div>
          </>
      </Modal>
      </div>

        </MyCard>
    )
}
