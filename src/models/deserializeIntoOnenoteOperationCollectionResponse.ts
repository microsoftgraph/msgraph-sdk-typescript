import {createOnenoteOperationFromDiscriminatorValue} from './createOnenoteOperationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {OnenoteOperation} from './onenoteOperation';
import {OnenoteOperationCollectionResponse} from './onenoteOperationCollectionResponse';
import {serializeOnenoteOperation} from './serializeOnenoteOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteOperationCollectionResponse(onenoteOperationCollectionResponse: OnenoteOperationCollectionResponse | undefined = {} as OnenoteOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(onenoteOperationCollectionResponse),
        "value": n => { onenoteOperationCollectionResponse.value = n.getCollectionOfObjectValues<OnenoteOperation>(createOnenoteOperationFromDiscriminatorValue); },
    }
}
