import {LicenseAssignmentState} from './licenseAssignmentState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeLicenseAssignmentState(writer: SerializationWriter, licenseAssignmentState: LicenseAssignmentState | undefined = {} as LicenseAssignmentState) : void {
        writer.writeStringValue("assignedByGroup", licenseAssignmentState.assignedByGroup);
        writer.writeCollectionOfPrimitiveValues<Guid>("disabledPlans", licenseAssignmentState.disabledPlans);
        writer.writeStringValue("error", licenseAssignmentState.errorEscaped);
        writer.writeDateValue("lastUpdatedDateTime", licenseAssignmentState.lastUpdatedDateTime);
        writer.writeStringValue("@odata.type", licenseAssignmentState.odataType);
        writer.writeGuidValue("skuId", licenseAssignmentState.skuId);
        writer.writeStringValue("state", licenseAssignmentState.state);
        writer.writeAdditionalData(licenseAssignmentState.additionalData);
}
