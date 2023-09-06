import { type AccessPackageAssignmentReviewSettings } from './accessPackageAssignmentReviewSettings';
import { AccessReviewExpirationBehavior } from './accessReviewExpirationBehavior';
import { type EntitlementManagementSchedule } from './entitlementManagementSchedule';
import { serializeEntitlementManagementSchedule } from './serializeEntitlementManagementSchedule';
import { serializeSubjectSet } from './serializeSubjectSet';
import { type SubjectSet } from './subjectSet';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentReviewSettings(writer: SerializationWriter, accessPackageAssignmentReviewSettings: AccessPackageAssignmentReviewSettings | undefined = {} as AccessPackageAssignmentReviewSettings) : void {
        writer.writeEnumValue<AccessReviewExpirationBehavior>("expirationBehavior", accessPackageAssignmentReviewSettings.expirationBehavior);
        writer.writeCollectionOfObjectValues<SubjectSet>("fallbackReviewers", accessPackageAssignmentReviewSettings.fallbackReviewers, serializeSubjectSet);
        writer.writeBooleanValue("isEnabled", accessPackageAssignmentReviewSettings.isEnabled);
        writer.writeBooleanValue("isRecommendationEnabled", accessPackageAssignmentReviewSettings.isRecommendationEnabled);
        writer.writeBooleanValue("isReviewerJustificationRequired", accessPackageAssignmentReviewSettings.isReviewerJustificationRequired);
        writer.writeBooleanValue("isSelfReview", accessPackageAssignmentReviewSettings.isSelfReview);
        writer.writeStringValue("@odata.type", accessPackageAssignmentReviewSettings.odataType);
        writer.writeCollectionOfObjectValues<SubjectSet>("primaryReviewers", accessPackageAssignmentReviewSettings.primaryReviewers, serializeSubjectSet);
        writer.writeObjectValue<EntitlementManagementSchedule>("schedule", accessPackageAssignmentReviewSettings.schedule, serializeEntitlementManagementSchedule);
        writer.writeAdditionalData(accessPackageAssignmentReviewSettings.additionalData);
}
