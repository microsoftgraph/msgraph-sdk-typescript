import {ActivityHistoryItem} from './activityHistoryItem';
import {createActivityHistoryItemFromDiscriminatorValue} from './createActivityHistoryItemFromDiscriminatorValue';
import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createVisualInfoFromDiscriminatorValue} from './createVisualInfoFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Json} from './json';
import {serializeActivityHistoryItem} from './serializeActivityHistoryItem';
import {serializeJson} from './serializeJson';
import {serializeVisualInfo} from './serializeVisualInfo';
import {Status} from './status';
import {UserActivity} from './userActivity';
import {VisualInfo} from './visualInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserActivity(userActivity: UserActivity | undefined = {} as UserActivity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userActivity),
        "activationUrl": n => { userActivity.activationUrl = n.getStringValue(); },
        "activitySourceHost": n => { userActivity.activitySourceHost = n.getStringValue(); },
        "appActivityId": n => { userActivity.appActivityId = n.getStringValue(); },
        "appDisplayName": n => { userActivity.appDisplayName = n.getStringValue(); },
        "contentInfo": n => { userActivity.contentInfo = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "contentUrl": n => { userActivity.contentUrl = n.getStringValue(); },
        "createdDateTime": n => { userActivity.createdDateTime = n.getDateValue(); },
        "expirationDateTime": n => { userActivity.expirationDateTime = n.getDateValue(); },
        "fallbackUrl": n => { userActivity.fallbackUrl = n.getStringValue(); },
        "historyItems": n => { userActivity.historyItems = n.getCollectionOfObjectValues<ActivityHistoryItem>(createActivityHistoryItemFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { userActivity.lastModifiedDateTime = n.getDateValue(); },
        "status": n => { userActivity.status = n.getEnumValue<Status>(Status); },
        "userTimezone": n => { userActivity.userTimezone = n.getStringValue(); },
        "visualElements": n => { userActivity.visualElements = n.getObjectValue<VisualInfo>(createVisualInfoFromDiscriminatorValue); },
    }
}
