//start replaced branch: WORKFLOW_UA_PLANNING

//start replaced branch: ES_SET_EXPIRATION_DATES
{
	if (wfTask == 'Application Process' && matches(wfStatus, 'Complete', 'Application Incomplete')) {
		editAppSpecific('Application Expiration Date', dateAdd(null, 180));
	}

	if ((appMatch('Planning/Development/Conditional Use/NA') || appMatch('Planning/Development/Conditional Zoning/NA')) && wfTask == 'City Council' && matches(wfStatus, 'Approved', 'Approved with Conditions')) {
		editAppSpecific('Council Approval Expires', dateAdd(null, 730));
	}

	if ((appMatch('Planning/Development/Conditional Use/NA') || appMatch('Planning/Development/Conditional Zoning/NA')) && wfTask == 'City Council' && matches(wfStatus, 'Approved', 'Approved with Conditions', 'Denied')) {
		editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
	}

	if (appMatch('Planning/Development/Level II/NA') && wfTask == 'PZC' && matches(wfStatus, 'Approved', 'Approved with Conditions')) {
		editAppSpecific('PZC Approval Expires', dateAdd(null, 365));
	}

	if (appMatch('Planning/Development/Level II/NA') && wfTask == 'PZC' && matches(wfStatus, 'Denied')) {
		editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
	}

	if (appMatch('Planning/Development/Level II/NA') && wfTask == 'Appeal to City Council' && matches(wfStatus, 'Denial Upheld', 'Approval Overturned')) {
		editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
	}

	if (appMatch('Planning/Development/Level III/NA') && wfTask == 'City Council' && matches(wfStatus, 'Approved', 'Approved with Conditions')) {
		editAppSpecific('Council Approval Expires', dateAdd(null, 730));
	}

	if (appMatch('Planning/Development/Level III/NA') && wfTask == 'City Council' && matches(wfStatus, 'Approved', 'Approved with Conditions', 'Denied')) {
		editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
	}

	if (appMatch('Planning/Development/Manufactured Hsg Community/NA') && wfTask == 'City Council' && matches(wfStatus, 'Approved', 'Approved with Conditions')) {
		editAppSpecific('Council Approval Expires', dateAdd(null, 730));
	}

	if (appMatch('Planning/Development/Manufactured Hsg Community/NA') && wfTask == 'City Council' && matches(wfStatus, 'Approved', 'Approved with Conditions', 'Denied')) {
		editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
	}

	if (appMatch('Planning/Development/Vested Rights/NA') && wfTask == 'City Council' && matches(wfStatus, 'Approved', 'Approved with Conditions')) {
		editAppSpecific('Council Approval Expires', dateAdd(null, 730));
	}

	if (appMatch('Planning/Development/Vested Rights/NA') && wfTask == 'City Council' && matches(wfStatus, 'Approved', 'Approved with Conditions', 'Denied')) {
		editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
	}

	if (appMatch('Planning/Subdivision/Major/NA') && wfTask == 'PZC' && matches(wfStatus, 'Approved', 'Approved with Conditions')) {
		editAppSpecific('PZC Approval Expires', dateAdd(null, 730));
	}

	if (appMatch('Planning/Subdivision/Major/NA') && wfTask == 'PZC' && matches(wfStatus, 'Denied')) {
		editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
	}

	if (appMatch('Planning/Subdivision/Major/NA') && wfTask == 'Appeal to City Council' && matches(wfStatus, 'Denial Upheld', 'Approval Overturned')) {
		editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
	}

	if (appMatch('Planning/Subdivision/Modification/NA') && wfTask == 'PZC' && matches(wfStatus, 'Approved', 'Approved with Conditions')) {
		editAppSpecific('PZC Approval Expires', dateAdd(null, 30));
	}

	if (appMatch('Planning/Subdivision/Modification/NA') && wfTask == 'PZC' && matches(wfStatus, 'Denied')) {
		editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
	}

	if (appMatch('Planning/Subdivision/Modification/NA') && wfTask == 'Appeal to City Council' && matches(wfStatus, 'Denial Upheld', 'Approval Overturned')) {
		editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
	}

	if (appMatch('Planning/Subdivision/Minor/NA') && wfTask == 'Verification' && matches(wfStatus, 'Project Approved')) {
		editAppSpecific('Approval Expiration Date', dateAdd(null, 30));
	}

	if (appMatch('Planning/Subdivision/Recombination/NA') && wfTask == 'Verification' && matches(wfStatus, 'Project Approved')) {
		editAppSpecific('Approval Expiration Date', dateAdd(null, 30));
	}

	if (appMatch('Planning/Development/Signage Plan/NA') && wfTask == 'City Council' && matches(wfStatus, 'Approved', 'Approved with Conditions')) {
		editAppSpecific('Approval Expiration Date', dateAdd(null, 365));
	}

	if (appMatch('Planning/Development/Signage Plan/NA') && wfTask == 'City Council' && matches(wfStatus, 'Denied')) {
		addStdCondition('Planning', 'Signage Plan Denial');
	}

	if (appMatch('Planning/HRC/Major Work/NA') && wfTask == 'Issuance' && matches(wfStatus, 'Issue', 'Reissue')) {
		editAppSpecific('Approval Expiration Date', dateAdd(null, 365));
	}

	if (appMatch('Planning/HRC/Major Work/NA') && wfTask == 'Issuance' && matches(wfStatus, 'Deny')) {
		editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
	}

	if (appMatch('Planning/HRC/Minor Work/NA') && wfTask == 'Issuance' && matches(wfStatus, 'Issue', 'Reissue')) {
		editAppSpecific('Approval Expiration Date', dateAdd(null, 365));
	}

	if (appMatch('Planning/Variance/*/*') && wfTask == 'Commission Review' && matches(wfStatus, 'Approved', 'Approved with Conditions', 'Denied', 'Recommended Denial')) {
		editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
	}

	if ((appMatch('*/*/Alternative Compliance/*') || appMatch('*/*/Board of Adjustments/*') || appMatch('*/*/DTC/*') || appMatch('*/*/RDRR/*')) && wfTask == 'Commission Review' && matches(wfStatus, 'Approved', 'Approved with Conditions', 'Denied', 'Recommended Denial')) {
		editAppSpecific('Last Date to Appeal', dateAdd(null, 30));
	}

	if (appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*') && matches(wfStatus, 'Issue', 'Reissue') && AInfo['Issue Zoning Permit To'] != 'NA') {
		editAppSpecific('Zoning Permit Expires', dateAdd(null, 365));
	}

	if (appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*') && matches(wfStatus, 'Issue', 'Reissue') && AInfo['Issue Stormwater Permit To'] != 'NA') {
		editAppSpecific('Stormwater Permit Expires', dateAdd(null, 365));
	}

	if (appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*') && matches(wfStatus, 'Issue', 'Reissue') && AInfo['Issue Grading Permit To'] != 'NA') {
		editAppSpecific('Grading Permit Expires', dateAdd(null, 365));
	}

	if (appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*') && matches(wfStatus, 'Issue', 'Reissue') && AInfo['Issue Driveway Permit To'] != 'NA') {
		editAppSpecific('Driveway Permit Expires', dateAdd(null, 365));
	}

}
//end replaced branch: ES_SET_EXPIRATION_DATES;
if ((appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*'))) {

	//replaced branch(ES_SITE_WF_UPD_AFTER)
	ES_SITE_WF_UPD_AFTER();
}

if (wfTask == 'Addressing' && matches(wfStatus, 'Approved - Fees Due')) {

	//replaced branch(ES_ADDRESSING_FEES)
	ES_ADDRESSING_FEES();
}

if (matches(wfTask, 'Planning', 'Staff Level Site Plan Review', 'Final TRC', 'Technical Review') && matches(wfStatus, 'Approved', 'Approved with Conditions', 'Disapproved', 'Partial Approval') && AInfo['Apply Steep Slope Fee?'] == 'Yes') {
	updateFee('STEEPSLOPE', 'RES_NEW', 'FINAL', 1, 'Y');
	updateFee('TECH', 'GENERAL', 'FINAL', 1, 'Y');
}

if (appMatch('Planning/*/*/*') && wfTask == 'Planning Construction' && matches(wfStatus, 'Final Approved', 'Expired')) {
	closeTask('Planning', 'Completed', 'Closed by Script', '', 'PLN_TRCPROCESS');
}

if (appMatch('Planning/*/*/*') && wfTask == 'Grading Construction' && matches(wfStatus, 'Final Approved', 'Expired')) {
	closeTask('Grading', 'Completed', 'Closed by Script', '', 'PLN_TRCPROCESS');
}

if (appMatch('Planning/*/*/*') && wfTask == 'Driveway Construction' && matches(wfStatus, 'Final Approved', 'Expired')) {
	closeTask('Driveway', 'Completed', 'Closed by Script', '', 'PLN_TRCPROCESS');
}

if (appMatch('Planning/*/*/*') && wfTask == 'Stormwater Construction' && matches(wfStatus, 'Final Approved', 'Expired')) {
	closeTask('Stormwater', 'Completed', 'Closed by Script', '', 'PLN_TRCPROCESS');
}

if (appMatch('Planning/*/*/*') && wfTask == 'Flood Construction' && matches(wfStatus, 'Final Approved', 'Expired')) {
	closeTask('Flood', 'Completed', 'Closed by Script', '', 'PLN_TRCPROCESS');
}

// TODO: review with  Diane per email 10/26. Completed. Turned on next 4 IF statements


if (wfProcess == 'PLN_1STTRCCOMMENTS' && wfStatus == 'Comments Sent') {
	updateTask('TRC', 'Hold for Revision', 'Set by Script', '', 'PLN_TRC');
}

if (wfProcess == 'PLN_1STTRCCOMMENTS' && wfStatus == 'Hold for Revision') {
	activateTask('Resubmittal', 'PLN_1STTRCCOMMENTS');
}

if (wfProcess == 'PLN_2NDTRCCOMMENTS' && wfStatus == 'Hold for Revision') {
	activateTask('Resubmittal', 'PLN_2NDTRCCOMMENTS');
}

if (wfProcess == 'PLN_2NDTRCCOMMENTS' && wfStatus == 'Comments Sent') {
	updateTask('Final TRC', 'Hold for Revision', 'Set by Script', '', 'PLN_TRC');
}


if ((appMatch('Planning/Permits/Level II/NA') || appMatch('Planning/Permits/Level III/NA') || appMatch('Planning/Permits/Conditional Zoning/NA') || appMatch('Planning/Permits/Manufactured Hsg Community/NA') || appMatch('Planning/Permits/Vested Rights/NA') || appMatch('Planning/Subdivision/Major/NA') || appMatch('Planning/Subdivision/Modification/NA')) && wfStatus == 'Amend' && wfTask == 'Partial Permit') {
	activateTask('Application Process');
}

if (wfProcess == 'PLN_HRCMINOR' && wfStatus == 'Hold for Revision') {
	activateTask('Amendment Routing', 'PLN_HRCMINOR');
}

if (wfProcess == 'PLN_LVL2' && wfStatus == 'Hold for Revision') {
	activateTask('Application Process', 'PLN_LVL2');
}

// TODO: review with  Diane per email 10/26. Done. Turned on next two IF statements

if (wfProcess == 'PLN_2NDTRCCOMMENTS' && wfStatus == 'Comments Sent') {
	updateTask('Final Review', 'Hold for Revision', 'Set by Script', '', 'PLN_LVL2SUB');
}

if (wfProcess == 'PLN_1STTRCCOMMENTS' && wfStatus == 'Comments Sent') {
	updateTask('Level II TRC', 'Hold for Revision', 'Set by Script', '', 'PLN_LVL2SUB');
}


if (appMatch('Planning/Non Development/*/*') && matches(wfStatus, 'Withdrawn')) {
	deactivateTask('Planning Review');
}

if (appMatch('Planning/HRC/Major Work/NA') && matches(wfStatus, 'Expired', 'Revoke')) {
	deactivateTask('Issuance');
}

if (appMatch('Planning/*/Conditional Use/*') && wfTask == 'City Council' && matches(wfStatus, 'Remand to DC')) {
	deactivateTask('City Council');
	activateTask('Downtown Commission');
}

// DISABLED: WORKFLOW_UA_PLANNING:22
//if (appMatch('Planning/*/Conditional Use/*') && matches(wfStatus,'Recommend Approval to DC','Recommend APC to DC')) {
//	activateTask('Downtown Commission');
//	}

if (appMatch('Planning/*/Conditional Use/*') && matches(wfStatus, 'Appeal Received')) {
	activateTask('PZC Appeal');
	deactivateTask('Initial TRC');
}

if (wfProcess == 'PLN_CUP' && wfStatus == 'Hold for Revision') {
	activateTask('Project Intake', 'PLN_CUP');
}

if (appMatch('Planning/*/Conditional Use/*') && wfStatus == 'Amend' && wfTask == 'Partial Permit') {
	activateTask('Project Intake');
}

// DISABLED: WORKFLOW_UA_PLANNING:26
//if (wfTask == 'Application Process' && matches(wfStatus,'Application Complete') && AInfo['Create a Residential Site Work permit?'] == 'Yes') {
//	newChildID = createChild('Permits','Residential','Site Work','NA','');
//	copyAppSpecific(newChildID);
//	comment('New child app id = '+ newChildID);
//	}

if (wfProcess == 'PLN_LEVEL1COMMENTS' && wfStatus == 'Hold for Revision') {
	activateTask('Resubmittal', 'PLN_LEVEL1COMMENTS');
}

if (wfProcess == 'PLN_TEMP-OCC' && wfStatus == 'Hold for Revision') {
	activateTask('Amendment Routing', 'PLN_TEMP-OCC');
}

if (matches(wfProcess, 'PLN_TRC', 'PLN_LVL2') && wfStatus == 'Hold for Revision') {
	activateTask('Application Process');
}

if (matches(wfProcess, 'PLN_HRCMINOR', 'PLN_SUBMINOR', 'PW_DEV') && wfStatus == 'Hold for Revision') {
	activateTask('Amendment Routing');
}

if (appMatch('Planning/Development/Signage Plan/*') && matches(wfStatus, 'Denied')) {
	addParcelCondition(null, 'Planning', 'Applied', 'Signage Plan Detail', 'City Council has denied the proposed signage plan associated with this parcel. The applicant must wait at least 365 days before reapplying for a new signage plan substantially similar to the proposed signage plan.', 'Notice');
}

if (wfTask == 'Permit Verification' && matches(wfStatus, 'Issue', 'Issue Partial')) {

	//replaced branch(WORKFLOWTASK_UA_ADD_INSP)
	WORKFLOWTASK_UA_ADD_INSP();
}

if (matches(wfTask, 'HRC Review') && matches(wfStatus, 'Approved', 'Approved with Conditions')) {
	email('PAC@ashevillenc.gov', 'noreply@ashevillenc.gov', 'HRC Overlay Task', 'HRC Overlay Review task updated. ' + capIDString + ' - Please check record status and issue if ready.');
}

if ((appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*') || appMatch('Permits/*/Site Work/*')) && matches(wfStatus, 'Issue') && AInfo['Issue Grading Permit To'] != 'NA') {
	emailContact('Grading Preliminary Inspection Required', 'Permit Number: ' + capIDString + ' <br> Location: ' + CapAddress + ' <br> A Grading Permit is being issued for this location contingent upon proper installation of all erosion control devices. <br> The contractor must schedule a GR-PRELIM inspection before commencing work. All approved plans and permits must be on site. Silt Fencing and a Construction Entrance must be installed, and the temporary address must be posted. This inspection is required on individual lots, master sites and also required for individual lots within Subdivisions. Building permit inspections will be delayed until the Grading Preliminary inspection is approved. Thank you.');
}

var profArr = getLicenseProfessional(capId);
if ((appMatch('Planning/Development/*/*') || appMatch('Planning/Subdivision/*/*') || appMatch('Permits/*/Site Work/*')) && matches(wfStatus, 'Issue') && AInfo['Issue Grading Permit To'] != 'NA' && profArr != null) {
	for (x in profArr)
		if (profArr[x].getEmail() + '' != '')
			email(profArr[x].getEmail(), 'noreply@ashevillenc.gov', 'Grading Preliminary Inspection Required', 'Permit Number: ' + capIDString + ' <br> Location: ' + CapAddress + ' <br> A Grading Permit is being issued for this location contingent upon proper installation of all erosion control devices. <br> The contractor must schedule a GR-PRELIM inspection before commencing work. All approved plans and permits must be on site. Silt Fencing and a Construction Entrance must be installed, and the temporary address must be posted. This inspection is required on individual lots, master sites and also required for individual lots within Subdivisions. Building permit inspections will be delayed until the Grading Preliminary inspection is approved. Thank you.');
}

//end replaced branch: WORKFLOW_UA_PLANNING;
