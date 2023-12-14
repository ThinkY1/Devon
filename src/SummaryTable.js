import React, {useState} from 'react';
import { Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export const SprintSummary = () => {

   const data = [
    {
        "id": 1, SprintEnd: "27-Oct-2023",
        SprintName: "Sprint 8",
        SprintResult: "Success",
        Reliability: "100",
        DemoRating: "5",
        ImpactScore: "5",
        Billability: " ",
        DVA: "Arun and Utkarsh",
        Comments: " ",
        ScrumMaster: "Raghavendra",
        IkigaiSession: "Applicable Done",
        LastModified: "30-Oct-2023 06:01 GMT (Raghavendra)"
    },
    { 
        SprintEnd: "27-Oct-2023",
        SprintName: "Sprint 8",
        SprintResult: "Success",
        Reliability: "100",
        DemoRating: "5",
        ImpactScore: "5",
        Billability: " ",
        DVA: "Arun and Utkarsh",
        Comments: " ",
        ScrumMaster: "Raghavendra",
        IkigaiSession: "Applicable Done",
        LastModified: "30-Oct-2023 06:01 GMT (Raghavendra)"
    },
    {
        SprintEnd: "27-Oct-2023",
        SprintName: "Sprint 8",
        SprintResult: "Success",
        Reliability: "100",
        DemoRating: "5",
        ImpactScore: "5",
        Billability: " ",
        DVA: "Arun and Utkarsh",
        Comments: " ",
        ScrumMaster: "Raghavendra",
        IkigaiSession: "Applicable Done",
        LastModified: "30-Oct-2023 06:01 GMT (Raghavendra)"
    },
    
   ];

   const tableRows = data.map((element) => {
    return (
        <tr className='items'>
            <td>{element.SprintEnd}</td>
            <td>{element.SprintName}</td>
            <td>{element.SprintResult}</td>
        </tr>
    );
    
   });
   
   return (
    <div className='container'>
        <Table hover>
            <thead>
                <tr>
                    <th>SprintEnd</th>
                    <th>SprintName</th>
                    <th>SprintResult</th>
                </tr>
            </thead>
            <tbody>{tableRows}</tbody>
        </Table>
    </div>
    
    
   );
   
   
}
