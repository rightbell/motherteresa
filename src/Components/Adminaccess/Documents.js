import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import { Container, Table } from 'react-bootstrap';
import { getDatabase, ref, onValue, get } from 'firebase/database';
import Header from '../Header'
import { Link } from 'react-router-dom';

function Documents() {
  const [tableData, setTableData] = useState([]);
  const db  = getDatabase();
  useEffect(() => {
    // const starCountRef = ref(db,);
    const starRef = ref(db,  'doc');
    get(starRef).then((snapshot) => {
      const data = snapshot.val();
      // updateStarCount(postElement, data);
      console.log('data', data)
      if(data) {
        setTableData([...data])
      }
      
    });
  },[])
    return (
        <div>
            <Header/>
            <Container>
            <div style={{height:'1200px', border: '8px dotted #f65868', backgroundColor: 'white',fontSize:'22px', color: 'aliceblue',fontFamily: 'Righteous', fontWeight: '100',marginTop:'40px'}}>
            <h1 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '80px', marginLeft:'50px'}}> B. Documents and Information </h1>
            <Table striped bordered hover size="sm" style={{textAlign:'center',marginTop:'100px'}}> 
  <thead>
    <tr>
      <th>Sl No.</th>
      <th style={{height:'60px',width:'480px'}}>Documents/Information</th>
      <th>Upload Documents</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
     <td style={{height:'90px',width:'480px'}}>Copies of Affiliation/Upgradation letter and Recent Extension of Affiliation , if Any</td>
     <td style={{margin:'auto',textAlign:'center'}}>
         <a target="_blank" href={tableData[1]?.affiliation} rel="noreferrer" >{tableData[1]?.affiliation}</a>
     </td>
      
    </tr>
    <tr>
      <td>2</td>
      <td style={{height:'90px',width:'480px'}}>Copies of Societies/Trust/Company Registration/Remewal Certificate as Applicable</td>
                  <td style={{ margin: 'auto', textAlign: 'center' }}><a target="_blank" href={tableData[2]?.Societies} rel="noreferrer" > {tableData[2]?.Societies}</a></td>
     
    </tr>
    <tr>
      <td>3</td>
      <td style={{height:'90px',width:'480px'}} >Copy of Objection Certificate (NOC) issued, if applicable by State GOVT/UT</td>
                  <td style={{ margin: 'auto', textAlign: 'center' }}><a target="_blank" href={tableData[3]?.NOC} rel="noreferrer" > {tableData[3]?.NOC}</a></td>
    
    </tr>
    <tr>
      <td>4</td>
      <td style={{height:'90px',width:'480px'}} >Copies of Recognition Certificate under RTE ACT 2009 and it's Renewal if Applicable</td>
                  <td style={{ margin: 'auto', textAlign: 'center' }}> <a target="_blank" href={tableData[4]?.Recognition} rel="noreferrer" > {tableData[4]?.Recognition}</a></td>
    
    </tr>
    <tr>
      <td>5</td>
      <td style={{height:'90px',width:'480px'}}>Copy of Valid Building Safety Certificate as per the national Building Code</td>
                  <td style={{ margin: 'auto', textAlign: 'center' }}> <a target="_blank" href={tableData[5]?.Building} rel="noreferrer" > {tableData[5]?.Building}</a></td>

    </tr>
    <tr>
      <td>6</td>
      <td style={{height:'90px',width:'480px'}}>Copy of Valid fire Safety Certificate issued by the Competent Authority</td>
                  <td style={{ margin: 'auto', textAlign: 'center' }}><a target="_blank" href={tableData[6]?.fire} rel="noreferrer" > {tableData[6]?.fire}</a></td>
    
    </tr>
    <tr>
      <td>7</td>
      <td style={{height:'90px',width:'480px'}}>Copy of DEO Certificate Submitted by the School for affiliation/Upgradation/Extension of affiliation or self Certification by School</td>
                  <td style={{ margin: 'auto', textAlign: 'center' }}> <a target="_blank" href={tableData[7]?.DEO} rel="noreferrer" > {tableData[7]?.DEO}</a></td>
    
    </tr>
    <tr>
      <td>8</td>
      <td style={{height:'90px',width:'480px'}}>Copies of Valid Water, Health and Sanitation Certificate</td>
                  <td style={{ margin: 'auto', textAlign: 'center' }}><a target="_blank" href={tableData[8]?.Water} rel="noreferrer" > {tableData[8]?.Water}</a></td>
    
    </tr>
  </tbody>
</Table>
</div>
</Container>
            <Footer/>
        </div>
    )
}

export default Documents;
