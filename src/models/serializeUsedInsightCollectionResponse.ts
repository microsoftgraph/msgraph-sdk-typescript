import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUsedInsight} from './serializeUsedInsight';
import {UsedInsight} from './usedInsight';
import {UsedInsightCollectionResponse} from './usedInsightCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUsedInsightCollectionResponse(writer: SerializationWriter, usedInsightCollectionResponse: UsedInsightCollectionResponse | undefined = {} as UsedInsightCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, usedInsightCollectionResponse)
        writer.writeCollectionOfObjectValues<UsedInsight>("value", usedInsightCollectionResponse.value, serializeUsedInsight);
}
