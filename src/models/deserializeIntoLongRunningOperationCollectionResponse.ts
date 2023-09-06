import { createLongRunningOperationFromDiscriminatorValue } from './createLongRunningOperationFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type LongRunningOperation } from './longRunningOperation';
import { type LongRunningOperationCollectionResponse } from './longRunningOperationCollectionResponse';
import { serializeLongRunningOperation } from './serializeLongRunningOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoLongRunningOperationCollectionResponse(longRunningOperationCollectionResponse: LongRunningOperationCollectionResponse | undefined = {} as LongRunningOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(longRunningOperationCollectionResponse),
        "value": n => { longRunningOperationCollectionResponse.value = n.getCollectionOfObjectValues<LongRunningOperation>(createLongRunningOperationFromDiscriminatorValue); },
    }
}
