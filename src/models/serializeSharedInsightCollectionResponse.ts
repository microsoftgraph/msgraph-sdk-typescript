import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeSharedInsight } from './serializeSharedInsight';
import { type SharedInsight } from './sharedInsight';
import { type SharedInsightCollectionResponse } from './sharedInsightCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSharedInsightCollectionResponse(writer: SerializationWriter, sharedInsightCollectionResponse: SharedInsightCollectionResponse | undefined = {} as SharedInsightCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sharedInsightCollectionResponse)
        writer.writeCollectionOfObjectValues<SharedInsight>("value", sharedInsightCollectionResponse.value, serializeSharedInsight);
}
