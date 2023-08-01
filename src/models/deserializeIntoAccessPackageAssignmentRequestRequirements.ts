import type {AccessPackageAssignmentRequestRequirements} from './accessPackageAssignmentRequestRequirements';
import type {AccessPackageQuestion} from './accessPackageQuestion';
import {createAccessPackageQuestionFromDiscriminatorValue} from './createAccessPackageQuestionFromDiscriminatorValue';
import {createEntitlementManagementScheduleFromDiscriminatorValue} from './createEntitlementManagementScheduleFromDiscriminatorValue';
import type {EntitlementManagementSchedule} from './entitlementManagementSchedule';
import {serializeAccessPackageQuestion} from './serializeAccessPackageQuestion';
import {serializeEntitlementManagementSchedule} from './serializeEntitlementManagementSchedule';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentRequestRequirements(accessPackageAssignmentRequestRequirements: AccessPackageAssignmentRequestRequirements | undefined = {} as AccessPackageAssignmentRequestRequirements) : Record<string, (node: ParseNode) => void> {
    return {
        "allowCustomAssignmentSchedule": n => { accessPackageAssignmentRequestRequirements.allowCustomAssignmentSchedule = n.getBooleanValue(); },
        "isApprovalRequiredForAdd": n => { accessPackageAssignmentRequestRequirements.isApprovalRequiredForAdd = n.getBooleanValue(); },
        "isApprovalRequiredForUpdate": n => { accessPackageAssignmentRequestRequirements.isApprovalRequiredForUpdate = n.getBooleanValue(); },
        "@odata.type": n => { accessPackageAssignmentRequestRequirements.odataType = n.getStringValue(); },
        "policyDescription": n => { accessPackageAssignmentRequestRequirements.policyDescription = n.getStringValue(); },
        "policyDisplayName": n => { accessPackageAssignmentRequestRequirements.policyDisplayName = n.getStringValue(); },
        "policyId": n => { accessPackageAssignmentRequestRequirements.policyId = n.getStringValue(); },
        "questions": n => { accessPackageAssignmentRequestRequirements.questions = n.getCollectionOfObjectValues<AccessPackageQuestion>(createAccessPackageQuestionFromDiscriminatorValue); },
        "schedule": n => { accessPackageAssignmentRequestRequirements.schedule = n.getObjectValue<EntitlementManagementSchedule>(createEntitlementManagementScheduleFromDiscriminatorValue); },
    }
}
