import {LicenseAssignmentState} from './licenseAssignmentState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLicenseAssignmentState(writer: SerializationWriter, licenseAssignmentState: LicenseAssignmentState | undefined = {} as LicenseAssignmentState) : void {
        writer.writeStringValue("assignedByGroup", licenseAssignmentState.assignedByGroup);
        writer.writeCollectionOfPrimitiveValues<string>("disabledPlans", licenseAssignmentState.disabledPlans);
        writer.writeStringValue("error", licenseAssignmentState.errorEscaped);
        writer.writeDateValue("lastUpdatedDateTime", licenseAssignmentState.lastUpdatedDateTime);
        writer.writeStringValue("@odata.type", licenseAssignmentState.odataType);
        writer.writeStringValue("skuId", licenseAssignmentState.skuId);
        writer.writeStringValue("state", licenseAssignmentState.state);
        writer.writeAdditionalData(licenseAssignmentState.additionalData);
}
