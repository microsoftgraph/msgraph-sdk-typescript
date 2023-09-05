import { type ActivityHistoryItem } from './activityHistoryItem';
import { type ActivityHistoryItemCollectionResponse } from './activityHistoryItemCollectionResponse';
import { createActivityHistoryItemFromDiscriminatorValue } from './createActivityHistoryItemFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeActivityHistoryItem } from './serializeActivityHistoryItem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoActivityHistoryItemCollectionResponse(activityHistoryItemCollectionResponse: ActivityHistoryItemCollectionResponse | undefined = {} as ActivityHistoryItemCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(activityHistoryItemCollectionResponse),
        "value": n => { activityHistoryItemCollectionResponse.value = n.getCollectionOfObjectValues<ActivityHistoryItem>(createActivityHistoryItemFromDiscriminatorValue); },
    }
}
