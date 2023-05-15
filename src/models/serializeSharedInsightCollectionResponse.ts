import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSharedInsight} from './serializeSharedInsight';
import {SharedInsight} from './sharedInsight';
import {SharedInsightCollectionResponse} from './sharedInsightCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharedInsightCollectionResponse(writer: SerializationWriter, sharedInsightCollectionResponse: SharedInsightCollectionResponse | undefined = {} as SharedInsightCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sharedInsightCollectionResponse)
        writer.writeCollectionOfObjectValues<SharedInsight>("value", sharedInsightCollectionResponse.value, serializeSharedInsight);
}
