import { type ActivityHistoryItem } from './activityHistoryItem';
import { type ActivityHistoryItemCollectionResponse } from './activityHistoryItemCollectionResponse';
import { serializeActivityHistoryItem } from './serializeActivityHistoryItem';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeActivityHistoryItemCollectionResponse(writer: SerializationWriter, activityHistoryItemCollectionResponse: ActivityHistoryItemCollectionResponse | undefined = {} as ActivityHistoryItemCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, activityHistoryItemCollectionResponse)
        writer.writeCollectionOfObjectValues<ActivityHistoryItem>("value", activityHistoryItemCollectionResponse.value, serializeActivityHistoryItem);
}
