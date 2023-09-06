import { type CommsOperation } from './commsOperation';
import { type CommsOperationCollectionResponse } from './commsOperationCollectionResponse';
import { createCommsOperationFromDiscriminatorValue } from './createCommsOperationFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeCommsOperation } from './serializeCommsOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCommsOperationCollectionResponse(commsOperationCollectionResponse: CommsOperationCollectionResponse | undefined = {} as CommsOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(commsOperationCollectionResponse),
        "value": n => { commsOperationCollectionResponse.value = n.getCollectionOfObjectValues<CommsOperation>(createCommsOperationFromDiscriminatorValue); },
    }
}
