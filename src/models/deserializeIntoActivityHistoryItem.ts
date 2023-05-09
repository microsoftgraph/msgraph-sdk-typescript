import {ActivityHistoryItem} from './activityHistoryItem';
import {createUserActivityFromDiscriminatorValue} from './createUserActivityFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeUserActivity} from './serializeUserActivity';
import {Status} from './status';
import {UserActivity} from './userActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoActivityHistoryItem(activityHistoryItem: ActivityHistoryItem | undefined = {} as ActivityHistoryItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(activityHistoryItem),
        "activeDurationSeconds": n => { activityHistoryItem.activeDurationSeconds = n.getNumberValue(); },
        "activity": n => { activityHistoryItem.activity = n.getObjectValue<UserActivity>(createUserActivityFromDiscriminatorValue); },
        "createdDateTime": n => { activityHistoryItem.createdDateTime = n.getDateValue(); },
        "expirationDateTime": n => { activityHistoryItem.expirationDateTime = n.getDateValue(); },
        "lastActiveDateTime": n => { activityHistoryItem.lastActiveDateTime = n.getDateValue(); },
        "lastModifiedDateTime": n => { activityHistoryItem.lastModifiedDateTime = n.getDateValue(); },
        "startedDateTime": n => { activityHistoryItem.startedDateTime = n.getDateValue(); },
        "status": n => { activityHistoryItem.status = n.getEnumValue<Status>(Status); },
        "userTimezone": n => { activityHistoryItem.userTimezone = n.getStringValue(); },
    }
}
