import {AccessReviewHistoryDecisionFilter} from './accessReviewHistoryDecisionFilter';
import {AccessReviewHistoryDefinition} from './accessReviewHistoryDefinition';
import {AccessReviewHistoryInstance} from './accessReviewHistoryInstance';
import {AccessReviewHistoryScheduleSettings} from './accessReviewHistoryScheduleSettings';
import {AccessReviewHistoryStatus} from './accessReviewHistoryStatus';
import {AccessReviewScope} from './accessReviewScope';
import {createAccessReviewHistoryInstanceFromDiscriminatorValue} from './createAccessReviewHistoryInstanceFromDiscriminatorValue';
import {createAccessReviewHistoryScheduleSettingsFromDiscriminatorValue} from './createAccessReviewHistoryScheduleSettingsFromDiscriminatorValue';
import {createAccessReviewScopeFromDiscriminatorValue} from './createAccessReviewScopeFromDiscriminatorValue';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAccessReviewHistoryInstance} from './serializeAccessReviewHistoryInstance';
import {serializeAccessReviewHistoryScheduleSettings} from './serializeAccessReviewHistoryScheduleSettings';
import {serializeAccessReviewScope} from './serializeAccessReviewScope';
import {serializeUserIdentity} from './serializeUserIdentity';
import {UserIdentity} from './userIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewHistoryDefinition(accessReviewHistoryDefinition: AccessReviewHistoryDefinition | undefined = {} as AccessReviewHistoryDefinition) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessReviewHistoryDefinition),
        "createdBy": n => { accessReviewHistoryDefinition.createdBy = n.getObjectValue<UserIdentity>(createUserIdentityFromDiscriminatorValue); },
        "createdDateTime": n => { accessReviewHistoryDefinition.createdDateTime = n.getDateValue(); },
        "decisions": n => { accessReviewHistoryDefinition.decisions = n.getCollectionOfEnumValues<AccessReviewHistoryDecisionFilter>(AccessReviewHistoryDecisionFilter); },
        "displayName": n => { accessReviewHistoryDefinition.displayName = n.getStringValue(); },
        "instances": n => { accessReviewHistoryDefinition.instances = n.getCollectionOfObjectValues<AccessReviewHistoryInstance>(createAccessReviewHistoryInstanceFromDiscriminatorValue); },
        "reviewHistoryPeriodEndDateTime": n => { accessReviewHistoryDefinition.reviewHistoryPeriodEndDateTime = n.getDateValue(); },
        "reviewHistoryPeriodStartDateTime": n => { accessReviewHistoryDefinition.reviewHistoryPeriodStartDateTime = n.getDateValue(); },
        "scheduleSettings": n => { accessReviewHistoryDefinition.scheduleSettings = n.getObjectValue<AccessReviewHistoryScheduleSettings>(createAccessReviewHistoryScheduleSettingsFromDiscriminatorValue); },
        "scopes": n => { accessReviewHistoryDefinition.scopes = n.getCollectionOfObjectValues<AccessReviewScope>(createAccessReviewScopeFromDiscriminatorValue); },
        "status": n => { accessReviewHistoryDefinition.status = n.getEnumValue<AccessReviewHistoryStatus>(AccessReviewHistoryStatus); },
    }
}
