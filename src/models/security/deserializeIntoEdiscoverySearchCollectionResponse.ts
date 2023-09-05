import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { createEdiscoverySearchFromDiscriminatorValue } from './createEdiscoverySearchFromDiscriminatorValue';
import { type EdiscoverySearch } from './ediscoverySearch';
import { type EdiscoverySearchCollectionResponse } from './ediscoverySearchCollectionResponse';
import { serializeEdiscoverySearch } from './serializeEdiscoverySearch';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoverySearchCollectionResponse(ediscoverySearchCollectionResponse: EdiscoverySearchCollectionResponse | undefined = {} as EdiscoverySearchCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoverySearchCollectionResponse),
        "value": n => { ediscoverySearchCollectionResponse.value = n.getCollectionOfObjectValues<EdiscoverySearch>(createEdiscoverySearchFromDiscriminatorValue); },
    }
}
