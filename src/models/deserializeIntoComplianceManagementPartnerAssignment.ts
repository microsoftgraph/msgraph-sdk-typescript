import {ComplianceManagementPartnerAssignment} from './complianceManagementPartnerAssignment';
import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoComplianceManagementPartnerAssignment(complianceManagementPartnerAssignment: ComplianceManagementPartnerAssignment | undefined = {} as ComplianceManagementPartnerAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { complianceManagementPartnerAssignment.odataType = n.getStringValue(); },
        "target": n => { complianceManagementPartnerAssignment.target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
    }
}
