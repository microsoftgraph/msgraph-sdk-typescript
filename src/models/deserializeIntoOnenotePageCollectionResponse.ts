import { createOnenotePageFromDiscriminatorValue } from './createOnenotePageFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type OnenotePage } from './onenotePage';
import { type OnenotePageCollectionResponse } from './onenotePageCollectionResponse';
import { serializeOnenotePage } from './serializeOnenotePage';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenotePageCollectionResponse(onenotePageCollectionResponse: OnenotePageCollectionResponse | undefined = {} as OnenotePageCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(onenotePageCollectionResponse),
        "value": n => { onenotePageCollectionResponse.value = n.getCollectionOfObjectValues<OnenotePage>(createOnenotePageFromDiscriminatorValue); },
    }
}
