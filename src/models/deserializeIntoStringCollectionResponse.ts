import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type StringCollectionResponse } from './stringCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoStringCollectionResponse(stringCollectionResponse: StringCollectionResponse | undefined = {} as StringCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(stringCollectionResponse),
        "value": n => { stringCollectionResponse.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
