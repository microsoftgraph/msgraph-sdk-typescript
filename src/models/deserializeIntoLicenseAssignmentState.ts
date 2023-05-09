import {LicenseAssignmentState} from './licenseAssignmentState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLicenseAssignmentState(licenseAssignmentState: LicenseAssignmentState | undefined = {} as LicenseAssignmentState) : Record<string, (node: ParseNode) => void> {
    return {
        "assignedByGroup": n => { licenseAssignmentState.assignedByGroup = n.getStringValue(); },
        "disabledPlans": n => { licenseAssignmentState.disabledPlans = n.getCollectionOfPrimitiveValues<string>(); },
        "error": n => { licenseAssignmentState.errorEscaped = n.getStringValue(); },
        "lastUpdatedDateTime": n => { licenseAssignmentState.lastUpdatedDateTime = n.getDateValue(); },
        "@odata.type": n => { licenseAssignmentState.odataType = n.getStringValue(); },
        "skuId": n => { licenseAssignmentState.skuId = n.getStringValue(); },
        "state": n => { licenseAssignmentState.state = n.getStringValue(); },
    }
}
