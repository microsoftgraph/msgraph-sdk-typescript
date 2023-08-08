import {createRichLongRunningOperationFromDiscriminatorValue} from './createRichLongRunningOperationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {RichLongRunningOperation} from './richLongRunningOperation';
import type {RichLongRunningOperationCollectionResponse} from './richLongRunningOperationCollectionResponse';
import {serializeRichLongRunningOperation} from './serializeRichLongRunningOperation';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRichLongRunningOperationCollectionResponse(richLongRunningOperationCollectionResponse: RichLongRunningOperationCollectionResponse | undefined = {} as RichLongRunningOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(richLongRunningOperationCollectionResponse),
        "value": n => { richLongRunningOperationCollectionResponse.value = n.getCollectionOfObjectValues<RichLongRunningOperation>(createRichLongRunningOperationFromDiscriminatorValue); },
    }
}
