import React, { Component } from 'react'
import {Field} from 'formik'

class FormStep1 extends Component {

    get WageSubsidyEmployees() {
        let subsidy = this.props.values.wageSubsidy;
        if (subsidy === "yes") {
            return (
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="employeesClaimed">How Many Employees is WorkBC currently Subsidizing?<span
                            style={{ color: "red" }}>*</span></label>
                        <Field
                            as="select"
                            className="form-control" 
                            id="EmployeesClaimed" 
                            name="claims" 
                        >
                            <option value="">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </Field>
                    </div>
                    <p>Note: an employer may have a maximum of 5 active wage subsidy agreements at one time and a maximum of 10 wage subsidy agreements per year</p>
                </div>

            )
        }
       return null;
    }
    get WorkSafeCoverage() {
        let Coverage = this.props.values.WSBCCoverage;
        if (Coverage === "yes") {
            return (
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="WSBCNumber">WorkSafe BC Number <span
                        style={{ color: "red" }}>*</span></label>
                        <Field className="form-control" id="WSBCNumber" name="WSBCNumber"/>
                    </div>
                </div>

            )
        }
       return null;
    }
    get workAddressForm(){
        if(this.props.values.otherWorkAddress){
            return(<div>
                <div className="form-group">
                    <br /><h2 id="forms">Work Place Information (If different from address above)</h2>
                    <p>Please complete a separate application for each work place</p>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="address">Work Address <span
                        style={{ color: "red" }}>*  </span></label>
                    <small className="text-muted" id="address">  123 Main St.</small>
                    <Field className="form-control" id="address" name="address" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label className="col-form-label control-label" htmlFor="city">City / Town <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group col-md-4">
                        <label className="col-form-label control-label" htmlFor="Province">Province <span
                            style={{ color: "red" }}>*</span></label>
                        <Field
                            as="select"
                            className="form-control" 
                            id="Province" 
                            name="Province" 
                        >
                            <option value="">Please select</option>
                            <option value="AB">Alberta</option>
                            <option value="BC">British Columbia</option>
                            <option value="MB">Manitoba</option>
                            <option value="NB">New Brunswick</option>
                            <option value="NL">Newfoundland and Labrador</option>
                            <option value="NT">Northwest Territories</option>
                            <option value="NS">Nova Scotia</option>
                            <option value="NU">Nunavut</option>
                            <option value="ON">Ontario</option>
                            <option value="PE">Prince Edward Island</option>
                            <option value="QC">Quebec</option>
                            <option value="SK">Saskatchewan</option>
                            <option value="YT">Yukon</option>
                        </Field>
                    </div>
                    <div className="form-group col-md-4">
                        <label className="col-form-label control-label" htmlFor="postal">Postal Code <span
                            style={{ color: "red" }}>*  </span></label>
                        <small className="text-muted" id="postal">  V0R2V5</small>
                        <Field className="form-control" id="postal" name="postal" />
                    </div>
                </div>
            </div>)
        }
        return null;
    }
    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
        //Else return step 1
        return (
            <div>
                <div className="form-group">
                    <br /><h2 id="forms">Business Information</h2>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-8">
                        <label className="col-form-label control-label" htmlFor="operatingName">Organization Name <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className="form-control" id="operatingName" name="operatingName" />
                    </div>
                    <div className="form-group col-md-4">
                        <label className="col-form-label control-label" htmlFor="businessNumber">CRA Business Number <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className="form-control" id="businessNumber" name="businessNumber" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label className="col-form-label control-label" htmlFor="address">Address <span
                            style={{ color: "red" }}>*  </span></label>
                        <small className="text-muted" id="address">  123 Main St.</small>
                        <Field className="form-control" id="address" name="address" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label className="col-form-label control-label" htmlFor="city">City / Town <span
                            style={{ color: "red" }}>*</span></label>
                        <Field className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group col-md-4">
                        <label className="col-form-label control-label" htmlFor="Province">Province <span
                            style={{ color: "red" }}>*</span></label>
                        <Field
                            as="select"
                            className="form-control" 
                            id="Province" 
                            name="Province" 
                        >
                            <option value="">Please select</option>
                            <option value="AB">Alberta</option>
                            <option value="BC">British Columbia</option>
                            <option value="MB">Manitoba</option>
                            <option value="NB">New Brunswick</option>
                            <option value="NL">Newfoundland and Labrador</option>
                            <option value="NT">Northwest Territories</option>
                            <option value="NS">Nova Scotia</option>
                            <option value="NU">Nunavut</option>
                            <option value="ON">Ontario</option>
                            <option value="PE">Prince Edward Island</option>
                            <option value="QC">Quebec</option>
                            <option value="SK">Saskatchewan</option>
                            <option value="YT">Yukon</option>
                        </Field>
                    </div>
                    <div className="form-group col-md-4">
                        <label className="col-form-label control-label" htmlFor="postal">Postal Code <span
                            style={{ color: "red" }}>*  </span></label>
                        <small className="text-muted" id="postal">  V0R2V5</small>
                        <Field className="form-control" id="postal" name="postal" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                            <label className="col-form-label control-label" htmlFor="phone">Phone Number <span
                                style={{ color: "red" }}>*</span></label>
                            <small className="text-muted" id="phone">  250-555-5555</small>
                            <Field className="form-control" id="phone" name="phone" />
                    </div>
                    <div className="form-group col-md-4">
                            <label className="col-form-label control-label" htmlFor="fax">Fax </label>
                            <small className="text-muted" id="Fax"> 1-250-555-5555</small>
                            <Field className="form-control" id="Fax" name="Fax" />
                        </div>
                    <div className="form-group col-md-4">
                        <label className="col-form-label control-label" htmlFor="email">Email Address <span
                                style={{ color: "red" }}>*</span></label>
                        <small className="text-muted" id="email">  someone@example.com</small>
                        <Field className="form-control" id="email" name="email" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <Field type="checkbox" className="form-check-input" id="otherWorkAddress" name="otherWorkAddress"/>
                        <label 
                            className="form-check-label" 
                            htmlFor="otherWorkAddress"
                        >
                        My organization's Workplace address is different than the organization's Business address.
                        </label>
                    </div>
                </div>
                {this.workAddressForm}
                <div className="form-row">
                    <div className="form-group col-md-6" id="SectorType">
                        <label className="col-form-label control-label" htmlFor="SectorType">Type of Sector: <span
                        style={{ color: "red" }}>*</span></label>
                        <div className="form-check">
                            <Field
                                className="form-check-input"
                                type="radio"
                                name="SectorType"
                                value="Private"
                            />
                            <label className="form-check-label" htmlFor="SectorTypePrivate">Private</label>
                        </div>
                        <div className="form-check">
                            <Field
                                className="form-check-input"
                                type="radio"
                                name="SectorType"
                                value="Non-Profit"
                            />
                            <label className="form-check-label" htmlFor="SectorTypeNon-Profit">Non-Profit</label>
                        </div>
                        <div className="form-check">
                            <Field
                                className="form-check-input"
                                type="radio"
                                name="SectorType"
                                value="Public"
                            />
                            <label className="form-check-label" htmlFor="SectorTypePublic">Public</label>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="col-form-label control-label" htmlFor="TypeOfIndustry">Type of Industry <span
                            style={{ color: "red" }}>*</span></label>
                        <Field
                            as="select"
                            className="form-control" 
                            id="TypeOfIndustry" 
                            name="Industry" 
                        >
                            <option value="">Please select</option>
                            <option value="Primary">Primary(Including Agriculture)</option>
                            <option value="Service">Service</option>
                            <option value="Manufacturing">Manufacturing</option>
                            <option value="Retail">Retail</option>
                            <option value="Other">Other</option>
                        </Field>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6" id="OrganizationSize">
                        <label className="col-form-label control-label" htmlFor="OrganizationSize">Size of Organization(number of employees) <span
                        style={{ color: "red" }}>*</span></label>
                        <div className="form-check">
                            <Field
                                className="form-check-input"
                                type="radio"
                                name="OrganizationSize"
                                value="1-49"
                            />
                            <label className="form-check-label"  htmlFor="OrganizationSize">1-49</label>
                        </div>
                        <div className="form-check">
                            <Field
                                className="form-check-input"
                                type="radio"
                                name="OrganizationSize"
                                value="49-499"
                            />
                            <label className="form-check-label"  htmlFor="OrganizationSize">49-499</label>
                        </div>
                        <div className="form-check">
                            <Field
                                className="form-check-input"
                                type="radio"
                                name="OrganizationSize"
                                value="500+"
                            />
                            <label className="form-check-label"  htmlFor="OrganizationSize">500+</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="cewsParticipation">Are you actively participating in the Canada Emergency Wage Subsidy program? <span
                        style={{ color: "red" }}>*</span> </label>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="cewsParticipation"
                            value="yes"
                        />
                        <label className="form-check-label" htmlFor="cewsParticipation">Yes</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="cewsParticipation"
                            value="no"
                        />
                        <label className="form-check-label" htmlFor="cewsParticipation">No</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="cewsParticipation"
                            value="notSure"
                        />
                        <label className="form-check-label" htmlFor="cewsParticipation">Not Sure</label>
                    </div>
                    {
                            this.props.cewsParticipation === "yes" &&
                            <small className="text-danger">An employee may only be subsidized by WorkBC if that employee is not subsidized under CEWS. Employees subsidized by CEWS are not eligible for WorkBC Wage Subsidy.</small>
                    }
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="employeeDisplacement">Will the subsidy result in the displacement of existing employees or volunteers? <span
                        style={{ color: "red" }}>*</span> </label>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="employeeDisplacement"
                            value="yes"
                        />
                        <label className="form-check-label" htmlFor="employeeDisplacement">Yes</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="employeeDisplacement"
                            value="no"
                        />
                        <label className="form-check-label" htmlFor="employeeDisplacement">No</label>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="LabourDispute">Is there a labour stoppage or labour - management dispute in progress? <span
                        style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="LabourDispute"
                            value="yes"
                        />
                        <label className="form-check-label" htmlFor="LabourDispute">Yes</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="LabourDispute"
                            value="no"
                        />
                        <label className="form-check-label" htmlFor="LabourDispute">No</label>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="UnionConcurrence">Is there Union concurrence? <span
                        style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="UnionConcurrence"
                            value="yes"
                        />
                        <label className="form-check-label" htmlFor="UnionConcurrence">Yes</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="UnionConcurrence"
                            value="no"
                        />
                        <label className="form-check-label" htmlFor="UnionConcurrence">No</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="UnionConcurrence"
                            value="N/A"
                        />
                        <label className="form-check-label" htmlFor="UnionConcurrence">N/A</label>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="LiabilityCoverage">Does your organization have 3rd Party liability coverage? <span
                        style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="LiabilityCoverage"
                            value="yes"
                        />
                        <label className="form-check-label" htmlFor="LiabilityCoverage">Yes</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="LiabilityCoverage"
                            value="no"
                        />
                        <label className="form-check-label" htmlFor="LiabilityCoverage">No</label>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="wageSubsidy">Is your organization currently receiving funding under a WorkBC Wage Subsidy agreement? <span
                        style={{ color: "red" }}>*</span> </label>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="wageSubsidy"
                            value="yes"
                        />
                        <label className="form-check-label" htmlFor="wageSubsidy">Yes</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="wageSubsidy"
                            value="no"
                        />
                        <label className="form-check-label" htmlFor="wageSubsidy">No</label>
                    </div>
                </div>
                {this.WageSubsidyEmployees}

                <div className="form-group">
                    <label className="col-form-label control-label" htmlFor="WSBCCoverage">Do you have WorkSafe BC coverage? <span
                        style={{ color: "red" }}>*</span></label>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="WSBCCoverage"
                            value="yes"
                        />
                        <label className="form-check-label" htmlFor="WSBCCoverage">Yes</label>
                    </div>
                    <div className="form-check">
                        <Field
                            className="form-check-input"
                            type="radio"
                            name="WSBCCoverage"
                            value="no"
                        />
                        <label className="form-check-label" htmlFor="WSBCCoverage">No</label>
                    </div>
                </div>
                {this.WorkSafeCoverage}
                <div className="form-group">
                    <div className="form-check">
                        <Field type="checkbox" className="form-check-input" id="eligibility" name="eligibility"/>
                        <label 
                            className="form-check-label control-label" 
                            htmlFor="eligibility"
                        >
                        <span style={{ color: "red" }}>*</span> I confirm that I have reviewed the employer eligibility criteria and meet the eligibility requirements. 
                        </label>
                    </div>
                </div>

            </div>
        )
    }


}

export default FormStep1