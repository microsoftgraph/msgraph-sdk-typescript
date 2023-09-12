import { createOnenoteOperationFromDiscriminatorValue } from './createOnenoteOperationFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type OnenoteOperation } from './onenoteOperation';
import { type OnenoteOperationCollectionResponse } from './onenoteOperationCollectionResponse';
import { serializeOnenoteOperation } from './serializeOnenoteOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteOperationCollectionResponse(onenoteOperationCollectionResponse: OnenoteOperationCollectionResponse | undefined = {} as OnenoteOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(onenoteOperationCollectionResponse),
        "value": n => { onenoteOperationCollectionResponse.value = n.getCollectionOfObjectValues<OnenoteOperation>(createOnenoteOperationFromDiscriminatorValue); },
    }
}
