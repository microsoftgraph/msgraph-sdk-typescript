import {AccessPackageAssignmentReviewSettings} from './accessPackageAssignmentReviewSettings';
import {AccessReviewExpirationBehavior} from './accessReviewExpirationBehavior';
import {createEntitlementManagementScheduleFromDiscriminatorValue} from './createEntitlementManagementScheduleFromDiscriminatorValue';
import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {EntitlementManagementSchedule} from './entitlementManagementSchedule';
import {serializeEntitlementManagementSchedule} from './serializeEntitlementManagementSchedule';
import {serializeSubjectSet} from './serializeSubjectSet';
import {SubjectSet} from './subjectSet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentReviewSettings(accessPackageAssignmentReviewSettings: AccessPackageAssignmentReviewSettings | undefined = {} as AccessPackageAssignmentReviewSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "expirationBehavior": n => { accessPackageAssignmentReviewSettings.expirationBehavior = n.getEnumValue<AccessReviewExpirationBehavior>(AccessReviewExpirationBehavior); },
        "fallbackReviewers": n => { accessPackageAssignmentReviewSettings.fallbackReviewers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
        "isEnabled": n => { accessPackageAssignmentReviewSettings.isEnabled = n.getBooleanValue(); },
        "isRecommendationEnabled": n => { accessPackageAssignmentReviewSettings.isRecommendationEnabled = n.getBooleanValue(); },
        "isReviewerJustificationRequired": n => { accessPackageAssignmentReviewSettings.isReviewerJustificationRequired = n.getBooleanValue(); },
        "isSelfReview": n => { accessPackageAssignmentReviewSettings.isSelfReview = n.getBooleanValue(); },
        "@odata.type": n => { accessPackageAssignmentReviewSettings.odataType = n.getStringValue(); },
        "primaryReviewers": n => { accessPackageAssignmentReviewSettings.primaryReviewers = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
        "schedule": n => { accessPackageAssignmentReviewSettings.schedule = n.getObjectValue<EntitlementManagementSchedule>(createEntitlementManagementScheduleFromDiscriminatorValue); },
    }
}
