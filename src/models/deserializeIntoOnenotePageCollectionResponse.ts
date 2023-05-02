import {createOnenotePageFromDiscriminatorValue} from './createOnenotePageFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {OnenotePage} from './onenotePage';
import {OnenotePageCollectionResponse} from './onenotePageCollectionResponse';
import {serializeOnenotePage} from './serializeOnenotePage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenotePageCollectionResponse(onenotePageCollectionResponse: OnenotePageCollectionResponse | undefined = {} as OnenotePageCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(onenotePageCollectionResponse),
        "value": n => { onenotePageCollectionResponse.value = n.getCollectionOfObjectValues<OnenotePage>(createOnenotePageFromDiscriminatorValue); },
    }
}
