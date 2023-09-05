import { type EdiscoveryEstimateOperation } from './ediscoveryEstimateOperation';
import { type EdiscoverySearch } from './ediscoverySearch';
import { serializeCaseOperation } from './serializeCaseOperation';
import { serializeEdiscoverySearch } from './serializeEdiscoverySearch';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryEstimateOperation(writer: SerializationWriter, ediscoveryEstimateOperation: EdiscoveryEstimateOperation | undefined = {} as EdiscoveryEstimateOperation) : void {
        serializeCaseOperation(writer, ediscoveryEstimateOperation)
        writer.writeNumberValue("indexedItemCount", ediscoveryEstimateOperation.indexedItemCount);
        writer.writeNumberValue("indexedItemsSize", ediscoveryEstimateOperation.indexedItemsSize);
        writer.writeNumberValue("mailboxCount", ediscoveryEstimateOperation.mailboxCount);
        writer.writeObjectValue<EdiscoverySearch>("search", ediscoveryEstimateOperation.search, serializeEdiscoverySearch);
        writer.writeNumberValue("siteCount", ediscoveryEstimateOperation.siteCount);
        writer.writeNumberValue("unindexedItemCount", ediscoveryEstimateOperation.unindexedItemCount);
        writer.writeNumberValue("unindexedItemsSize", ediscoveryEstimateOperation.unindexedItemsSize);
}
