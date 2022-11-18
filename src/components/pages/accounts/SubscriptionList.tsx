import React, { useContext, useEffect, useState } from 'react'
import MyCard from '../../layout/common/MyCard'
import Spacing from '../../layout/form/Spacing'
import Table from '../../layout/form/Table'
import Title from '../../layout/form/Title'
import { iUserInfo } from './Accounts'
import { Modal, Button } from "@milon27/react-modal";
import { LoanRequest, STATUS } from '../../../utils/interface/Models'
import { StateContext } from '../../../utils/context/MainContext'
import { initLoadData, onUpdateLevel, paginateNext, paginatePrev, URHpopulateData } from '../home/HomeUtils'
import { QuerySnapshot, where } from 'firebase/firestore'
import Define from '../../../utils/Define'
import MySelect from '../../layout/form/MySelect'
import FbPaginate from '../../layout/common/FbPaginate'

interface iAccountList {
    searching: boolean
    pendingList: iUserInfo[]
    reviewedList: iUserInfo[]
    setInfo: React.Dispatch<React.SetStateAction<iUserInfo>>
}
// var data = [
//     { "Load": "asdadada",
//     "First": "Jill Dupre",
//     "Last": "Jill Duprse",
//     "Term": "rt",
//     "Account":"yh",
//     "Intrest":"xc",
//     "Total":"2022",
//     }];


export default function SubscriptionList({ searching = false, pendingList = [], setInfo, reviewedList = [] }: iAccountList) {
    const [requests, setRequests] = useState<LoanRequest[]>([]);
  const { levels } = useContext(StateContext);
  const [page, setPage] = useState(0);
    const [showContent, setShowContent] = useState(true)
    const [showDetails, setShowDetails] = useState(false);
    const [item, setItem] = useState(null as any);
    const onDetailsClick =(item: any)=>{
    //   console.log(item);
      setItem(item);
    setShowDetails(true);
    }
      useEffect(() => {
        // console.log(setRequests(requests))
        if (levels.length > 0)
          initLoadData(
            setPage,
            populateData,
            where("loanStatus", "==", STATUS.pending)
          );
      }, [levels.length]);

//next
const next = async () => {
    paginateNext(
      setPage,
      populateData,
      requests,
      where("loanStatus", "==", STATUS.pending)
    );
  };
  //prev
  const prev = async () => {
    paginatePrev(
      setPage,
      populateData,
      requests,
      where("loanStatus", "==", STATUS.pending)
    );
  };

  const populateData = async (data: QuerySnapshot<LoanRequest>) => {
    URHpopulateData(data, levels, setRequests);
  };

    return (
        <MyCard>
            <div className='Subsmain'>
                <Title text='Search Result' isSubtitle />
                <Spacing />
                <Table
                    noShadow={true}
                    header="Load Date,First Name,Last Name,Term,Account,Intrest,Total Repayble, Action"
                    items={[
                        ...requests.map((item, i) => {
                            // console.log(item);
                          return {
                            date: item?.loanDate.split(" ")[0],
                            fname: item?.firstName,
                            lname: item?.lastName,
                            // level: item?.level,
                            
                            term: item.paymentTime + "days",
                            amount: Define.CURRENCY + item.loanAmount,
                            interest: item.interest,
                            total: Define.CURRENCY + item.totalRepayable,
                            Action:(
                                <Button
                                    onClick={() => {
                                        onDetailsClick(item)
                                    } } title="Get Auth"                                />
                                
                              ),
                          };
                        }),
                      ]}
                      hideOption={true}
                />
                 <Spacing />
      {/* paginate here */}
      <FbPaginate
        page={page}
        setPage={setPage}
        current_length={requests.length}
        next={next}
        prev={prev}
      />
            </div>
            <Spacing />
            <Spacing />
            <div className='modeName'>
            
            <Modal   title={item?.firstName+''+item?.lastName} onClose={() => {
        setShowContent(false)
        // console.log("closing the modal");
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
                       <input value={item?.totalRepayable}/>
                        </div>
                        <Button  onClick={() => setShowDetails(false)} title="Submit" />
                        <p className="paraM">Loan Date</p>
                        <h5 className='headingData'>{item?.loanDate.split(" ")[0]}</h5>
                        </div>
                        <div className='col-span-1 border rounded-md p-4'>
                   
                        <h6 className='fontSizes'>Next Instalment</h6>
                        <div className='flex justify-between items-center gap-2 circleDataTwo'>
                        {item?.loanAmount}
                        </div>
                        <p className="paraM">Next Instalment Date</p>
                        <h5 className='headingData'>{item?.loanDate.split(" ")[0]}</h5>
                       
                        </div>
                        <div className='col-span-1 border rounded-md p-4'>
                   
                        <p className="paraM paraMs">status: {item?.loanStatus}<br></br>
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
                                <tr><th>Due Date</th><th>Amount Due</th><th>Status</th></tr>
                            <tr><td>{item?.loanDate.split(" ")[0]}</td><td>{item?.loanAmount}</td>
                            <td>{item?.loanStatus}</td></tr>
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