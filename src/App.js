import React, { Component } from 'react'
import Navbar from './Navbar.js'
import './App.css'
import arrowmark from './back.png'
import contact from './contact(1).png'
import add from './add.png'
import fileimg from './fileimg.png'
import axios from 'axios'
import cross from './cross.png'
import Footer from "./Footer";



class App extends Component {
  constructor(props){
    super(props)
    this.state={
           contact:'',
           Co_name:'',
           Salutation: 'NA' ,
           Name:'',
           referred_by:'NA',
           Designation:'NA',
           Department:'',
           Email:'',
           email1:'',
           mob_no:'',
           mob_no1:'',
           directnumber:'',
           Notes:'',
           COLLEGE_CHOICES:'',
           y_of_p:'',
           degree:'',
           selectschool:'',
           stream:'',
           LinkedIn:'',
           Facebook:'',
           Twitter:'',
           month:'month',
           year:'year',
           OFFICE_DETAILS:'NA',
           boardlinepin:'+91',
           Board_Line_Number:'',
           boardlinepin1:'+91',
           Board_Line_Number1:'',
           Address:'',
           Country:'',
           City:'',
           RECRUITMENT_CHOICES:'',
           mob_no_pin:'+91',
           mob_no1_pin:'+91',
           pin1:'+91',
           pin2:'+91',
           showMe:false,
           institute_name:'',
           visible:false,
           newmobno:false,
           newemail:false,
           newboardline:false
           
        }
        
    }
    
    addboardline()
    {
        this.setState({
            newboardline:true
        })
    }
    removeboardline()
    {
        this.setState({
            newboardline:false
        })
    }
    addmobno()
    {
        this.setState({
            newmobno:true
        })
    }
    removemobno()
    {
        this.setState({
            newmobno:false
        })
    }
   operation()
   {
    this.setState({
        showMe:true,
        visible:false
    })
   }
   operationone()
   {
    this.setState({
        visible:true,
        showMe:false
    })
   }

   addemailid()
   {
    this.setState({
       newemail:true
    })
   }
   removeemailid()
   {
    this.setState({
       newemail:false
    })
   }
     
     
    handleCompanynameChange = (event) => {
        this.setState ({
            Co_name: event.target.value
        })
    }
    handleSalutationChange = (event) => {
      this.setState({
          Salutation: event.target.value
      })
   }
   handleNameChange = (event) => {
       this.setState ({
           Name: event.target.value
       })
   }
   handleReferredbyChange = (event) => {
    this.setState({
        referred_by: event.target.value
    })
    }
    handleDesignationChange = (event) => {
    this.setState({
        Designation: event.target.value
    })
    }
    handleEmailChange = (event) => {
    this.setState({
        Email: event.target.value
    })
    }
    handleEmail1Change = (event) => {
        this.setState({
            email1: event.target.value
        })
        }
     handleDepartmentChange = (event) => {
       this.setState({
           Department: event.target.value
       })
    }
    handleNumberChange = (event) => {
        this.setState({
            mob_no: event.target.value
        })
    }
    handleNumber1Change = (event) => {
        this.setState({
            mob_no1: event.target.value
        })
    }
  
   
   handleDirectnumberChange = (event) => {
       this.setState({
           directnumber: event.target.value
       })
   }
   handleRemarksChange = (event) => {
       this.setState({
           Notes: event.target.value
       })
   }
   handleInstitutionChange = (event) => {
    this.setState({
        COLLEGE_CHOICES: event.target.value
    })
  }
  handleInstituteChange = (event) => {
    this.setState({
        institute_name: event.target.value
    })
  }
 handleYearofpassingChange = (event) => {
     this.setState ({
         y_of_p: event.target.value
     })
 }
 handleDegreeChange = (event) => {
     this.setState({
         degree: event.target.value
     })
 }

 handleSchoolChange =(event) => {
     this.setState({
         selectschool: event.target.value
     })
 }
 handleStreamChange =(event) => {
     this.setState({
         stream: event.target.value
     })
 }
 handleLinkdlnChange =(event) => {
     this.setState({
         LinkedIn: event.target.value
     })
 }
 handleFacebookChange =(event) => {
     this.setState({
         Facebook: event.target.value
     })
 }
 handleTwitterChange =(event) => {
     this.setState({
         Twitter: event.target.value
     })
 }
 handleMonthChange =(event) => {
     this.setState({
         month: event.target.value
     })
 }
 handleYearChange =(event) => {
     this.setState({
         year: event.target.value
     })
 }
 handleOfficetypeChange = (event) => {
  this.setState({
      OFFICE_DETAILS: event.target.value
  })
}
handleBoardlineChange = (event) => {
   this.setState ({
       Board_Line_Number: event.target.value
   })
}
handleBoardline1Change = (event) => {
    this.setState ({
        Board_Line_Number1: event.target.value
    })
 }
handleAddressChange = (event) => {
   this.setState({
       Address: event.target.value
   })
}
handleCountryChange = (event) => {
   this.setState ({
       Country: event.target.value
   })
}
handleCityChange = (event) => {
   this.setState ({
       City: event.target.value
   })
}

    handleRecChange = (event) => {
    this.setState ({
        RECRUITMENT_CHOICES: event.target.value
    })
  }
  handleNumberpinChange = (event) => {
    this.setState ({
        mob_no_pin: event.target.value
    })
  }
  handleNumber1pinChange = (event) => {
    this.setState ({
        mob_no1_pin: event.target.value
    })
  }
  handleBoardlinepin1Change = (event) => {
     this.setState ({
         boardlinepin1: event.target.value
     })
   }
   handleBoardlinepinChange = (event) => {
    this.setState ({
        boardlinepin: event.target.value
    })
  }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`COMAPNY NAME=${this.state.Co_name}  
               SALUTATION=${this.state.Salutation}    
               NAME=${this.state.Name}    
               REFERRED BY=${this.state.referred_by}    
               DESIGNATION=${this.state.Designation}     
               DEPARTMENT=${this.state.Department}     
               EMAIL=${this.state.Email}
               ALTERNATE EMAIL=${this.state.email1}    
               MOBILE NO=${this.state.mob_no_pin} ${this.state.mob_no}  
               ALTERNATE MOBILE NO=${this.state.mob_no1_pin} ${this.state.mob_no1}     
               DIRECT NUMBER=${this.state.directnumber}     
               REMARKS=${this.state.Notes}   
               INSTITUTION=${this.state.COLLEGE_CHOICES} 
               INSTITUTE=${this.state.institute_name}    
               YEAR OF PASSING=${this.state.y_of_p}     
               DEGREE=${this.state.degree}
               WORKING SINCE=${this.state.month}  ${this.state.year}                       
               SCHOOL=${this.state.selectschool}      
               STREAM=${this.state.stream}     
               LINKEDIN=${this.state.LinkedIn}    
               FACEBOOK=${this.state.Facebook}     
               TWITTER=${this.state.Twitter}                    
               OFFICE TYPE=${this.state.OFFICE_DETAILS}     
               BOARD LINE NUMBER= ${this.state.boardlinepin} ${this.state.Board_Line_Number} 
               ALTERNATE BOARD LINE NUMBER= ${this.state.boardlinepin1} ${this.state.Board_Line_Number1}       
               ADDRESS=${this.state.Address}     
               COUNTRY=${this.state.Country}     
               CITY=${this.state.City}     
               RECRUITMENT CHOICES=${this.state.RECRUITMENT_CHOICES}`)
        
        axios.post('http://127.0.0.1:8000/Contact_List/', {
                       Co_name : this.state.COMPANY_NAME,
                       Salutation: this.state.SALUTATION,
                       Name:this.state.name,
                       referred_by:this.state.referred_by,
                       Designation:this.state.designation,
                       Department:this.state.department,
                       Email:this.state.email,
                      // email1:this.state.email1,
                      // mob_no_pin:this.state.mob_no_pin,
                       mob_no:this.state.mob_no,
                      //mob_no1_pin:this.state.mob_no1_pin,
                       //mob_no1:this.state.mob_no1,
                       Notes:this.state.remarks,
                       directnumber:this.state.directnumber,
                      // institution:this.state.institution,
                       //institute_name:this.state.institute_name,
                     //  stream:this.state.stream,
                      // selectschool:this.state.selectschool,
                       y_of_p:this.state.y_of_p,
                       degree:this.state.degree,
                       month:this.state.month,
                       year:this.state.year,
                       LinkedIn:this.state.LinkedIn,
                       Facebook:this.state.Facebook,
                       Twitter:this.state.Twitter,
                       OFFICE_DETAILS:this.state.OFFICE_DETAILS,
                      // boardlinepin:this.state.boardlinepin,
                       Board_Line_Number:this.state.Board_Line_Number,
                      // boardlinepin1:this.state.boardlinepin1,
                      // Board_Line_Number1:this.state.Board_Line_Number1,
                       Address:this.state.Address,
                       Country:this.state.Country,
                       City:this.state.Country,
                      // RECRUITMENT_CHOICES:this.state.RECRUITMENT_CHOICES,



        })
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.error(error)
        })


        // axios({
        //     method: 'POST',
        //     url: 'http://127.0.0.1:8000/Personal_Information',
        //         SALUTATION: this.handleSalutationChange,
        //         name:this.handleNameChange,
        //         referred_by:this.handleReferredbyChange,
        //         designation:this.handleDesignationChange,
        //         department:this.handleDepartmentChange,
        //         email:this.handleEmailChange,
        //         mob_no:this.handleNumberChange,
        //         remarks:this.handleRemarksChange,
            
        // }).then(response => {
        //     console.log(response)
        // })
        // .catch(error =>{
        //     console.log(error)
        // })

        // axios({
        //     method: 'POST',
        //     url: 'http://127.0.0.1:8000/Pedigree',
        //     data :{
        //         COLLEGE_CHOICES:this.handleInstitutionChange,
        //         y_of_p:this.handleYearofpassingChange,
        //         degree:this.handleDegreeChange
        //     }
        // }).then(response => {
        //     console.log(response)
        // })
        // .catch(error =>{
        //     console.log(error)
        // })


        // axios({
        //     method: 'POST',
        //     url: 'http://127.0.0.1:8000/Social_media_link',
        //     data :{
        //         LinkedIn:this.handleLinkdlnChange,
        //         Facebook:this.handleFacebookChange,
        //         Twitter:this.handleTwitterChange,
        //     }
        // }).then(response => {
        //     console.log(response)
        // })
        // .catch(error =>{
        //     console.log(error)

        // })


        // axios({
        //     method: 'POST',
        //     url: 'http://127.0.0.1:8000/Office_Detail',
        //     data :{
        //         OFFICE_DETAILS:this.handleOfficetypeChange,
        //         Board_Line_Number:this.handleBoardlineChange,
        //         Address:this.handleAddressChange,
        //         Country:this.handleCountryChange,
        //         City:this.handleCityChange,
        //         RECRUITMENT_CHOICES:this.handleRecChange,

        //     }
        // }).then(response => {
        //     console.log(response)
        // })
        // .catch(error =>{
        //     console.log(error)
        // })
    }


    render() {
        return (
    
            <div>  
                 <Navbar name="ContactInfo"  Icon={contact} />
              <form onSubmit={this.handleSubmit}>
               
            
                <div className="singlel"> 
                    <img src={arrowmark} alt="l" className="contact" width="7em" height="7em" />
                    
    <select className="companyselect" value={this.state.companyname} onChange={this.handleCompanynameChange}>
        <option>NA</option>
        <option>TCS</option>
        <option>INFOSYS</option>
        <option>ACCENTURE</option>
        <option>AMAZON</option>
        <option>HIGHRADIUS</option>
    </select>
                    
                    
                <span style={{position: 'absolute', right: 0}} ><button className="butn" type="submit">Save</button></span>
            
                </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
                <div className="allform">
                <div className="App">
                        <div className="formone">
                            <div className="formtitle">Personal information</div>
                            
                            <label>Salutation<span className="redv">*</span></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <select className="companydrop" value={this.state.SALUTATION} onChange={this.handleSalutationChange}>
                            <option value="NA">NA</option>
                            <option value="Colonel">Colonel</option>
                            <option value="Dr.">Dr.</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                            </select>
                            <br></br>
            
                            <label>Name<span className="redv">*</span></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className="company" type="text" value={this.state.name}
                            onChange={this.handleNameChange}/><br></br>
            
                            <label> Referred By</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <select className="companydrop" value={this.state.referred_by} onChange={this.handleReferredbyChange}>
                            <option value="NA">NA</option>
                            <option value="Mr.A">Mr.A</option>
                            <option value="Mr.B">Mr.B</option>
                            <option value="Mr.C">Mr.C</option> 
                            </select><br></br>
            
                            <label> Designation</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <select className="companydrop" value={this.state.designation} onChange={this.handleDesignationChange}>
                            <option value="NA">NA</option>
                            <option value="HR">HR</option>
                            <option value="Finance">Finance</option>
                            <option value="Administration">Administration</option>
                            <option value="Accounts">Accounts</option>
                            <option value="IT">IT</option>
                            <option value="Management">Management</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Technical">Technical</option>
                            <option value="Purchase">Purchase</option>
                         </select><br></br>
            
                            <label>Department</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className="company" type="text" value={this.state.department}
                            onChange={this.handleDepartmentChange}/><br></br>
            
                            <label>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className="company" type="text" value={this.state.email}
                            onChange={this.handleEmailChange}/>
                            <img src={add} alt="addfield" height="15" width="15" onClick={()=>this.addemailid()}></img><br></br> 


                            {
                                this.state.newemail ?
                                <div>
                                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input className="company" type="text" value={this.state.email1}
                                onChange={this.handleEmail1Change}/>
                                 <img src={cross} alt="addfield" height="15" width="15" onClick={()=>this.removeemailid()}></img>
                               </div> : null   
                            }
            
                            <label>Mobile Number</label>&nbsp;&nbsp;
                            <input className="company3" type="text" value={this.state.mob_no_pin}
                            onChange={this.handleNumberpinChange}></input>
                            <input className="company2" type="text" value={this.state.mob_no}
                            onChange={this.handleNumberChange}/>&nbsp;&nbsp;
                            <img src={add} alt="addfield" height="15" width="15" value="Create Element" onClick={()=>this.addmobno()} /><br></br> 
                           
                           { 
                           this.state.newmobno?
                            <div >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className="company3" type="text" value={this.state.mob_no1_pin}
                            onChange={this.handleNumber1pinChange}></input>
                            <input className="company2" type="text" value={this.state.mob_no1}
                            onChange={this.handleNumber1Change}/>&nbsp;&nbsp;
                            <img src={cross} alt="addfield" height="15" width="15" onClick={()=>this.removemobno()}></img>
                            </div> : null
    }
                           
                            <label>Direct Number</label>&nbsp;&nbsp;&nbsp;
                            <input className="company" type="text" value={this.state.directnumber}
                            onChange={this.handleDirectnumberChange}/>&nbsp;
                            
            
            
                            <label>Remarks</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <textarea className="broadinput" value={this.state.remarks} onChange={this.handleRemarksChange}></textarea>  
                        </div>   
                    </div>  
            
            
            
            
            
            
            
            
            
            <div className="App">
            <div className="formone">
                <div className="formtitle">Pedigree</div>
                
                <div><label> Institution</label>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                <span className="ri"> <input type="radio" value="KIIT" name="COLLEGE_CHOICES" onChange={this.handleInstitutionChange} className="inp"  onClick={()=>this.operation()} ></input>KIIT &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <input type="radio" value="Others" name="COLLEGE_CHOICES" onChange={this.handleInstitutionChange} className="inp" onClick={()=>this.operationone()} ></input>others
                <br></br></span></div>


             {
             this.state.showMe ?
             <div>
             <label>Select School</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <select className="companydrop" value={this.state.selectschool} onChange={this.handleSchoolChange}>
             <option value="NA">NA</option>
             <option value="School 1">School 1</option>
             <option value="School 2">School 2</option>
             <option value="School 3">School 3</option>
             </select><br></br>

             <label>Stream</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <select className="companydrop" value={this.state.stream} onChange={this.handleStreamChange}>
             <option value="NA">NA</option>
             <option value="Stream 1.1">Stream1.1</option>
             <option value="Stream 1.2">Stream 1.2</option>
             <option value="Stream 1.3">Stream 1.3</option>
             </select><br></br>
             </div>
             :null
             }

            {this.state.visible ?
            <div>
            <label>Institute Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className="company" type="text" value={this.state.institute_name}
             onChange={this.handleInstituteChange}/><br></br>
            </div>
            :null
            }
            
    
           
                            <label>Year of Passing</label>&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className="company" type="text" value={this.state.y_of_p}
                            onChange={this.handleYearofpassingChange}/><br></br>
            
                            <label> Degree</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className="company" type="text" value={this.state.degree}
                            onChange={this.handleDegreeChange}/>
                            <br></br>
            
                            <label>Working since</label>
                            <select className="workingsince" value={this.state.month} onChange={this.handleMonthChange}>
                            <option value="month">month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                            
                            </select>
                            <select className="workingsince1" value={this.state.year} onChange={this.handleYearChange}>
                            <option value="Year">Year</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            </select>  <br></br><br></br>
            
                            
                            <div className="formtitle">Social media Links</div> 
                            <br></br> 
                            <label> Linkdln&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <input className="company" type="text" value={this.state.LinkedIn}
                            onChange={this.handleLinkdlnChange}/><br/>
                            
                            <label> Facebook</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className="company" type="text" value={this.state.Facebook}
                            onChange={this.handleFacebookChange}/><br/>
            
                            <label>Twitter</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className="company" type="text" value={this.state.Twitter}
                            onChange={this.handleTwitterChange}/><br></br>
            
                        </div> 
                    
                    </div>  
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
                    
                    
                    <div className="App">
                        <div className="formone">
                            <div className="formtitle">Office Details</div>
                        
                 
                <label>Office Type</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select className="companyoffice" value={this.state.OFFICE_DETAILS} onChange={this.handleOfficetypeChange}>
                <option value="NA">NA</option>
                <option value="Head Office">Head Office</option>
                <option value="Factory / Plant">Factory / Plant</option>
                <option value="Branch Office">Branch Office</option>
                <option value="Project Site">Project Site</option>
                <option value="Regional Office">Regional Office</option>
                <option value="Registered Office">Registered Office</option>
                <option value="Zonal Office">Zonal Office</option>
                </select>
                <img src={fileimg} alt="addfield" height="20" width="20" className="officeimg" ></img>
                <br></br>

                         
            
                            
                <label>Board Line Number</label>&nbsp;&nbsp;               
                <input  type="text"  className="company5" value={this.state.boardlinepin}
                onChange={this.handleBoardlinepinChange}/>
                <input  type="text"  className="company4" value={this.state.Board_Line_Number}
                onChange={this.handleBoardlineChange}/>&nbsp;
                               
                <img src={add} alt="addfield" height="15" width="15" onClick={()=>this.addboardline()}></img><br></br> 
                
                
            {  this.state.newboardline?
                <div>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input  type="text"  className="company5" value={this.state.boardlinepin1}
                onChange={this.handleBoardlinepin1Change}/>
                <input  type="text"  className="company4" value={this.state.Board_Line_Number1}
                onChange={this.handleBoardline1Change}/>&nbsp;
                  <img src={cross} alt="addfield" height="15" width="15" onClick={()=>this.removeboardline()}></img><br></br><br/>
                </div>:null
            }
                <label>Address</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <textarea className="broadinput" value={this.state.Address} onChange={this.handleAddressChange}></textarea> <br></br>

                <label>Country</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="company" type="text" value={this.state.Country}
                onChange={this.handleCountryChange}/><br></br> 
               
                <label>City</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="company" type="text" value={this.state.City}
                onChange={this.handleCityChange}/><br></br> <br></br><br></br>
               
            
           
                <input type="radio" value="Recruitments are taken from the office" name="RECRUITMENT_CHOICES" className="rbtn" onChange={this.handleRecChange}></input><div className="last">Recruitments are taken from the office</div><br></br><br></br>
                <input type="radio" value="Yet to be confirmed" name="RECRUITMENT_CHOICES" className="rbtn" onChange={this.handleRecChange}></input><div className="last">Yet to be confirmed</div>
            
                            <br></br>
                            </div>   
                    </div>    
            
            
                </div>
             
            </form> 
            <Footer /> 
            
            </div>

            
             
          );
    }
}

export default App;