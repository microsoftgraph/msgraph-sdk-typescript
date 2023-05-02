import {ActivityHistoryItem} from './activityHistoryItem';
import {ActivityHistoryItemCollectionResponse} from './activityHistoryItemCollectionResponse';
import {serializeActivityHistoryItem} from './serializeActivityHistoryItem';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeActivityHistoryItemCollectionResponse(writer: SerializationWriter, activityHistoryItemCollectionResponse: ActivityHistoryItemCollectionResponse | undefined = {} as ActivityHistoryItemCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, activityHistoryItemCollectionResponse)
        writer.writeCollectionOfObjectValues<ActivityHistoryItem>("value", activityHistoryItemCollectionResponse.value, serializeActivityHistoryItem);
}
