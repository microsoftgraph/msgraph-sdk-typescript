import type {AccessReviewInstance} from './accessReviewInstance';
import type {AccessReviewNotificationRecipientItem} from './accessReviewNotificationRecipientItem';
import type {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import type {AccessReviewScheduleDefinition} from './accessReviewScheduleDefinition';
import type {AccessReviewScheduleSettings} from './accessReviewScheduleSettings';
import type {AccessReviewScope} from './accessReviewScope';
import type {AccessReviewStageSettings} from './accessReviewStageSettings';
import {createAccessReviewInstanceFromDiscriminatorValue} from './createAccessReviewInstanceFromDiscriminatorValue';
import {createAccessReviewNotificationRecipientItemFromDiscriminatorValue} from './createAccessReviewNotificationRecipientItemFromDiscriminatorValue';
import {createAccessReviewReviewerScopeFromDiscriminatorValue} from './createAccessReviewReviewerScopeFromDiscriminatorValue';
import {createAccessReviewScheduleSettingsFromDiscriminatorValue} from './createAccessReviewScheduleSettingsFromDiscriminatorValue';
import {createAccessReviewScopeFromDiscriminatorValue} from './createAccessReviewScopeFromDiscriminatorValue';
import {createAccessReviewStageSettingsFromDiscriminatorValue} from './createAccessReviewStageSettingsFromDiscriminatorValue';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAccessReviewInstance} from './serializeAccessReviewInstance';
import {serializeAccessReviewNotificationRecipientItem} from './serializeAccessReviewNotificationRecipientItem';
import {serializeAccessReviewReviewerScope} from './serializeAccessReviewReviewerScope';
import {serializeAccessReviewScheduleSettings} from './serializeAccessReviewScheduleSettings';
import {serializeAccessReviewScope} from './serializeAccessReviewScope';
import {serializeAccessReviewStageSettings} from './serializeAccessReviewStageSettings';
import {serializeUserIdentity} from './serializeUserIdentity';
import type {UserIdentity} from './userIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewScheduleDefinition(accessReviewScheduleDefinition: AccessReviewScheduleDefinition | undefined = {} as AccessReviewScheduleDefinition) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessReviewScheduleDefinition),
        "additionalNotificationRecipients": n => { accessReviewScheduleDefinition.additionalNotificationRecipients = n.getCollectionOfObjectValues<AccessReviewNotificationRecipientItem>(createAccessReviewNotificationRecipientItemFromDiscriminatorValue); },
        "createdBy": n => { accessReviewScheduleDefinition.createdBy = n.getObjectValue<UserIdentity>(createUserIdentityFromDiscriminatorValue); },
        "createdDateTime": n => { accessReviewScheduleDefinition.createdDateTime = n.getDateValue(); },
        "descriptionForAdmins": n => { accessReviewScheduleDefinition.descriptionForAdmins = n.getStringValue(); },
        "descriptionForReviewers": n => { accessReviewScheduleDefinition.descriptionForReviewers = n.getStringValue(); },
        "displayName": n => { accessReviewScheduleDefinition.displayName = n.getStringValue(); },
        "fallbackReviewers": n => { accessReviewScheduleDefinition.fallbackReviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
        "instanceEnumerationScope": n => { accessReviewScheduleDefinition.instanceEnumerationScope = n.getObjectValue<AccessReviewScope>(createAccessReviewScopeFromDiscriminatorValue); },
        "instances": n => { accessReviewScheduleDefinition.instances = n.getCollectionOfObjectValues<AccessReviewInstance>(createAccessReviewInstanceFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { accessReviewScheduleDefinition.lastModifiedDateTime = n.getDateValue(); },
        "reviewers": n => { accessReviewScheduleDefinition.reviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
        "scope": n => { accessReviewScheduleDefinition.scope = n.getObjectValue<AccessReviewScope>(createAccessReviewScopeFromDiscriminatorValue); },
        "settings": n => { accessReviewScheduleDefinition.settings = n.getObjectValue<AccessReviewScheduleSettings>(createAccessReviewScheduleSettingsFromDiscriminatorValue); },
        "stageSettings": n => { accessReviewScheduleDefinition.stageSettings = n.getCollectionOfObjectValues<AccessReviewStageSettings>(createAccessReviewStageSettingsFromDiscriminatorValue); },
        "status": n => { accessReviewScheduleDefinition.status = n.getStringValue(); },
    }
}
