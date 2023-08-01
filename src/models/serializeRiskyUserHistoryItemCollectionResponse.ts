import type {RiskyUserHistoryItem} from './riskyUserHistoryItem';
import type {RiskyUserHistoryItemCollectionResponse} from './riskyUserHistoryItemCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRiskyUserHistoryItem} from './serializeRiskyUserHistoryItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRiskyUserHistoryItemCollectionResponse(writer: SerializationWriter, riskyUserHistoryItemCollectionResponse: RiskyUserHistoryItemCollectionResponse | undefined = {} as RiskyUserHistoryItemCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, riskyUserHistoryItemCollectionResponse)
        writer.writeCollectionOfObjectValues<RiskyUserHistoryItem>("value", riskyUserHistoryItemCollectionResponse.value, serializeRiskyUserHistoryItem);
}
