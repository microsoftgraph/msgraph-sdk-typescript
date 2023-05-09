import {AccessPackageApprovalStage} from './accessPackageApprovalStage';
import {AccessPackageAssignmentApprovalSettings} from './accessPackageAssignmentApprovalSettings';
import {serializeAccessPackageApprovalStage} from './serializeAccessPackageApprovalStage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentApprovalSettings(writer: SerializationWriter, accessPackageAssignmentApprovalSettings: AccessPackageAssignmentApprovalSettings | undefined = {} as AccessPackageAssignmentApprovalSettings) : void {
        writer.writeBooleanValue("isApprovalRequiredForAdd", accessPackageAssignmentApprovalSettings.isApprovalRequiredForAdd);
        writer.writeBooleanValue("isApprovalRequiredForUpdate", accessPackageAssignmentApprovalSettings.isApprovalRequiredForUpdate);
        writer.writeStringValue("@odata.type", accessPackageAssignmentApprovalSettings.odataType);
        writer.writeCollectionOfObjectValues<AccessPackageApprovalStage>("stages", accessPackageAssignmentApprovalSettings.stages, serializeAccessPackageApprovalStage);
        writer.writeAdditionalData(accessPackageAssignmentApprovalSettings.additionalData);
}
