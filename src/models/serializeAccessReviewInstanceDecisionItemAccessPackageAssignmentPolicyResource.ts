import type {AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource} from './accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource';
import {serializeAccessReviewInstanceDecisionItemResource} from './serializeAccessReviewInstanceDecisionItemResource';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource(writer: SerializationWriter, accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource: AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource | undefined = {} as AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource) : void {
        serializeAccessReviewInstanceDecisionItemResource(writer, accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource)
        writer.writeStringValue("accessPackageDisplayName", accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource.accessPackageDisplayName);
        writer.writeStringValue("accessPackageId", accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource.accessPackageId);
}
