import {AccessReviewInstance} from './accessReviewInstance';
import {AccessReviewNotificationRecipientItem} from './accessReviewNotificationRecipientItem';
import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AccessReviewScheduleDefinition} from './accessReviewScheduleDefinition';
import {AccessReviewScheduleSettings} from './accessReviewScheduleSettings';
import {AccessReviewScope} from './accessReviewScope';
import {AccessReviewStageSettings} from './accessReviewStageSettings';
import {serializeAccessReviewInstance} from './serializeAccessReviewInstance';
import {serializeAccessReviewNotificationRecipientItem} from './serializeAccessReviewNotificationRecipientItem';
import {serializeAccessReviewReviewerScope} from './serializeAccessReviewReviewerScope';
import {serializeAccessReviewScheduleSettings} from './serializeAccessReviewScheduleSettings';
import {serializeAccessReviewScope} from './serializeAccessReviewScope';
import {serializeAccessReviewStageSettings} from './serializeAccessReviewStageSettings';
import {serializeEntity} from './serializeEntity';
import {serializeUserIdentity} from './serializeUserIdentity';
import {UserIdentity} from './userIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewScheduleDefinition(writer: SerializationWriter, accessReviewScheduleDefinition: AccessReviewScheduleDefinition | undefined = {} as AccessReviewScheduleDefinition) : void {
        serializeEntity(writer, accessReviewScheduleDefinition)
        writer.writeCollectionOfObjectValues<AccessReviewNotificationRecipientItem>("additionalNotificationRecipients", accessReviewScheduleDefinition.additionalNotificationRecipients, serializeAccessReviewNotificationRecipientItem);
        writer.writeObjectValue<UserIdentity>("createdBy", accessReviewScheduleDefinition.createdBy, serializeUserIdentity);
        writer.writeDateValue("createdDateTime", accessReviewScheduleDefinition.createdDateTime);
        writer.writeStringValue("descriptionForAdmins", accessReviewScheduleDefinition.descriptionForAdmins);
        writer.writeStringValue("descriptionForReviewers", accessReviewScheduleDefinition.descriptionForReviewers);
        writer.writeStringValue("displayName", accessReviewScheduleDefinition.displayName);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("fallbackReviewers", accessReviewScheduleDefinition.fallbackReviewers, serializeAccessReviewReviewerScope);
        writer.writeObjectValue<AccessReviewScope>("instanceEnumerationScope", accessReviewScheduleDefinition.instanceEnumerationScope, serializeAccessReviewScope);
        writer.writeCollectionOfObjectValues<AccessReviewInstance>("instances", accessReviewScheduleDefinition.instances, serializeAccessReviewInstance);
        writer.writeDateValue("lastModifiedDateTime", accessReviewScheduleDefinition.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("reviewers", accessReviewScheduleDefinition.reviewers, serializeAccessReviewReviewerScope);
        writer.writeObjectValue<AccessReviewScope>("scope", accessReviewScheduleDefinition.scope, serializeAccessReviewScope);
        writer.writeObjectValue<AccessReviewScheduleSettings>("settings", accessReviewScheduleDefinition.settings, serializeAccessReviewScheduleSettings);
        writer.writeCollectionOfObjectValues<AccessReviewStageSettings>("stageSettings", accessReviewScheduleDefinition.stageSettings, serializeAccessReviewStageSettings);
        writer.writeStringValue("status", accessReviewScheduleDefinition.status);
}
