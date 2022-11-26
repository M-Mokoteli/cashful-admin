import React, { useContext, useEffect, useState } from 'react'
import Button from '../../layout/form/Button'
import { LoanRequest, STATUS, UserDoc } from '../../../utils/interface/Models'
import { QuerySnapshot, updateDoc, where } from 'firebase/firestore'
import { Collections } from '../../../utils/firebase/Collections'
import { createDoc } from '../../../utils/firebase/config'
import { StateContext } from "../../../utils/context/MainContext";
import { initLoadData, URHpopulateData } from '../home/HomeUtils';

interface iDocBox {
    id: string
    status: string
    url: string
    infoKey: string
    isPdf?: boolean
}
export default function DocBox({ id, status, url, infoKey, isPdf = false }: iDocBox) {
    const { levels } = useContext(StateContext);
    const [requests, setRequests] = useState<LoanRequest[]>([]);
      const populateData = async (data: QuerySnapshot<LoanRequest>) => {
        URHpopulateData(data, levels, setRequests);
      };
    const onUpdateStatus = async (_status: "rejected" | "approved") => {
        //send to upcoming..
        const yes = confirm("Are you sure you want to change the status to " + _status + "?")
        if (yes === true) {
            console.log(Collections.USER_DOC, id);

            const docRef = createDoc<UserDoc>(Collections.USER_DOC, id)
            await updateDoc(docRef, { [`${infoKey}.status`]: _status.toString() })
            window.location.reload()
        }
    }

}
