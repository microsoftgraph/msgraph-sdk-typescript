import { type AccessPackageAssignmentRequestRequirements } from './accessPackageAssignmentRequestRequirements';
import { type AccessPackageQuestion } from './accessPackageQuestion';
import { type EntitlementManagementSchedule } from './entitlementManagementSchedule';
import { serializeAccessPackageQuestion } from './serializeAccessPackageQuestion';
import { serializeEntitlementManagementSchedule } from './serializeEntitlementManagementSchedule';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentRequestRequirements(writer: SerializationWriter, accessPackageAssignmentRequestRequirements: AccessPackageAssignmentRequestRequirements | undefined = {} as AccessPackageAssignmentRequestRequirements) : void {
        writer.writeBooleanValue("allowCustomAssignmentSchedule", accessPackageAssignmentRequestRequirements.allowCustomAssignmentSchedule);
        writer.writeBooleanValue("isApprovalRequiredForAdd", accessPackageAssignmentRequestRequirements.isApprovalRequiredForAdd);
        writer.writeBooleanValue("isApprovalRequiredForUpdate", accessPackageAssignmentRequestRequirements.isApprovalRequiredForUpdate);
        writer.writeStringValue("@odata.type", accessPackageAssignmentRequestRequirements.odataType);
        writer.writeStringValue("policyDescription", accessPackageAssignmentRequestRequirements.policyDescription);
        writer.writeStringValue("policyDisplayName", accessPackageAssignmentRequestRequirements.policyDisplayName);
        writer.writeStringValue("policyId", accessPackageAssignmentRequestRequirements.policyId);
        writer.writeCollectionOfObjectValues<AccessPackageQuestion>("questions", accessPackageAssignmentRequestRequirements.questions, serializeAccessPackageQuestion);
        writer.writeObjectValue<EntitlementManagementSchedule>("schedule", accessPackageAssignmentRequestRequirements.schedule, serializeEntitlementManagementSchedule);
        writer.writeAdditionalData(accessPackageAssignmentRequestRequirements.additionalData);
}
