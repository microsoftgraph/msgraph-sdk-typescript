import {AccessReviewHistoryDecisionFilter} from './accessReviewHistoryDecisionFilter';
import {AccessReviewHistoryDefinition} from './accessReviewHistoryDefinition';
import {AccessReviewHistoryInstance} from './accessReviewHistoryInstance';
import {AccessReviewHistoryScheduleSettings} from './accessReviewHistoryScheduleSettings';
import {AccessReviewHistoryStatus} from './accessReviewHistoryStatus';
import {AccessReviewScope} from './accessReviewScope';
import {serializeAccessReviewHistoryInstance} from './serializeAccessReviewHistoryInstance';
import {serializeAccessReviewHistoryScheduleSettings} from './serializeAccessReviewHistoryScheduleSettings';
import {serializeAccessReviewScope} from './serializeAccessReviewScope';
import {serializeEntity} from './serializeEntity';
import {serializeUserIdentity} from './serializeUserIdentity';
import {UserIdentity} from './userIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewHistoryDefinition(writer: SerializationWriter, accessReviewHistoryDefinition: AccessReviewHistoryDefinition | undefined = {} as AccessReviewHistoryDefinition) : void {
        serializeEntity(writer, accessReviewHistoryDefinition)
        writer.writeObjectValue<UserIdentity>("createdBy", accessReviewHistoryDefinition.createdBy, serializeUserIdentity);
        writer.writeDateValue("createdDateTime", accessReviewHistoryDefinition.createdDateTime);
        if(accessReviewHistoryDefinition.decisions)
        writer.writeEnumValue<AccessReviewHistoryDecisionFilter>("decisions", ...accessReviewHistoryDefinition.decisions);
        writer.writeStringValue("displayName", accessReviewHistoryDefinition.displayName);
        writer.writeCollectionOfObjectValues<AccessReviewHistoryInstance>("instances", accessReviewHistoryDefinition.instances, serializeAccessReviewHistoryInstance);
        writer.writeDateValue("reviewHistoryPeriodEndDateTime", accessReviewHistoryDefinition.reviewHistoryPeriodEndDateTime);
        writer.writeDateValue("reviewHistoryPeriodStartDateTime", accessReviewHistoryDefinition.reviewHistoryPeriodStartDateTime);
        writer.writeObjectValue<AccessReviewHistoryScheduleSettings>("scheduleSettings", accessReviewHistoryDefinition.scheduleSettings, serializeAccessReviewHistoryScheduleSettings);
        writer.writeCollectionOfObjectValues<AccessReviewScope>("scopes", accessReviewHistoryDefinition.scopes, serializeAccessReviewScope);
        writer.writeEnumValue<AccessReviewHistoryStatus>("status", accessReviewHistoryDefinition.status);
}
