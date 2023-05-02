import {createRichLongRunningOperationFromDiscriminatorValue} from './createRichLongRunningOperationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {RichLongRunningOperation} from './richLongRunningOperation';
import {RichLongRunningOperationCollectionResponse} from './richLongRunningOperationCollectionResponse';
import {serializeRichLongRunningOperation} from './serializeRichLongRunningOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRichLongRunningOperationCollectionResponse(richLongRunningOperationCollectionResponse: RichLongRunningOperationCollectionResponse | undefined = {} as RichLongRunningOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(richLongRunningOperationCollectionResponse),
        "value": n => { richLongRunningOperationCollectionResponse.value = n.getCollectionOfObjectValues<RichLongRunningOperation>(createRichLongRunningOperationFromDiscriminatorValue); },
    }
}
