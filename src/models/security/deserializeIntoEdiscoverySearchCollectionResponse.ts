import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createEdiscoverySearchFromDiscriminatorValue} from './createEdiscoverySearchFromDiscriminatorValue';
import {EdiscoverySearch} from './ediscoverySearch';
import {EdiscoverySearchCollectionResponse} from './ediscoverySearchCollectionResponse';
import {serializeEdiscoverySearch} from './serializeEdiscoverySearch';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoverySearchCollectionResponse(ediscoverySearchCollectionResponse: EdiscoverySearchCollectionResponse | undefined = {} as EdiscoverySearchCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(ediscoverySearchCollectionResponse),
        "value": n => { ediscoverySearchCollectionResponse.value = n.getCollectionOfObjectValues<EdiscoverySearch>(createEdiscoverySearchFromDiscriminatorValue); },
    }
}
