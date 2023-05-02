import {createEdiscoverySearchFromDiscriminatorValue} from './createEdiscoverySearchFromDiscriminatorValue';
import {deserializeIntoCaseOperation} from './deserializeIntoCaseOperation';
import {EdiscoveryEstimateOperation} from './ediscoveryEstimateOperation';
import {EdiscoverySearch} from './ediscoverySearch';
import {serializeEdiscoverySearch} from './serializeEdiscoverySearch';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryEstimateOperation(ediscoveryEstimateOperation: EdiscoveryEstimateOperation | undefined = {} as EdiscoveryEstimateOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseOperation(ediscoveryEstimateOperation),
        "indexedItemCount": n => { ediscoveryEstimateOperation.indexedItemCount = n.getNumberValue(); },
        "indexedItemsSize": n => { ediscoveryEstimateOperation.indexedItemsSize = n.getNumberValue(); },
        "mailboxCount": n => { ediscoveryEstimateOperation.mailboxCount = n.getNumberValue(); },
        "search": n => { ediscoveryEstimateOperation.search = n.getObjectValue<EdiscoverySearch>(createEdiscoverySearchFromDiscriminatorValue); },
        "siteCount": n => { ediscoveryEstimateOperation.siteCount = n.getNumberValue(); },
        "unindexedItemCount": n => { ediscoveryEstimateOperation.unindexedItemCount = n.getNumberValue(); },
        "unindexedItemsSize": n => { ediscoveryEstimateOperation.unindexedItemsSize = n.getNumberValue(); },
    }
}
