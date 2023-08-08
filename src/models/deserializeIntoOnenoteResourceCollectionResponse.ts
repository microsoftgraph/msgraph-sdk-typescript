import {createOnenoteResourceFromDiscriminatorValue} from './createOnenoteResourceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {OnenoteResource} from './onenoteResource';
import type {OnenoteResourceCollectionResponse} from './onenoteResourceCollectionResponse';
import {serializeOnenoteResource} from './serializeOnenoteResource';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteResourceCollectionResponse(onenoteResourceCollectionResponse: OnenoteResourceCollectionResponse | undefined = {} as OnenoteResourceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(onenoteResourceCollectionResponse),
        "value": n => { onenoteResourceCollectionResponse.value = n.getCollectionOfObjectValues<OnenoteResource>(createOnenoteResourceFromDiscriminatorValue); },
    }
}
