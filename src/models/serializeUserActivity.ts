import {ActivityHistoryItem} from './activityHistoryItem';
import {Json} from './json';
import {serializeActivityHistoryItem} from './serializeActivityHistoryItem';
import {serializeEntity} from './serializeEntity';
import {serializeJson} from './serializeJson';
import {serializeVisualInfo} from './serializeVisualInfo';
import {Status} from './status';
import {UserActivity} from './userActivity';
import {VisualInfo} from './visualInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserActivity(writer: SerializationWriter, userActivity: UserActivity | undefined = {} as UserActivity) : void {
        serializeEntity(writer, userActivity)
        writer.writeStringValue("activationUrl", userActivity.activationUrl);
        writer.writeStringValue("activitySourceHost", userActivity.activitySourceHost);
        writer.writeStringValue("appActivityId", userActivity.appActivityId);
        writer.writeStringValue("appDisplayName", userActivity.appDisplayName);
        writer.writeObjectValue<Json>("contentInfo", userActivity.contentInfo, serializeJson);
        writer.writeStringValue("contentUrl", userActivity.contentUrl);
        writer.writeDateValue("createdDateTime", userActivity.createdDateTime);
        writer.writeDateValue("expirationDateTime", userActivity.expirationDateTime);
        writer.writeStringValue("fallbackUrl", userActivity.fallbackUrl);
        writer.writeCollectionOfObjectValues<ActivityHistoryItem>("historyItems", userActivity.historyItems, serializeActivityHistoryItem);
        writer.writeDateValue("lastModifiedDateTime", userActivity.lastModifiedDateTime);
        writer.writeEnumValue<Status>("status", userActivity.status);
        writer.writeStringValue("userTimezone", userActivity.userTimezone);
        writer.writeObjectValue<VisualInfo>("visualElements", userActivity.visualElements, serializeVisualInfo);
}
