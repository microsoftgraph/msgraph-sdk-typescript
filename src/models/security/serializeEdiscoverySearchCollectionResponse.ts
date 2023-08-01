import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import type {EdiscoverySearch} from './ediscoverySearch';
import type {EdiscoverySearchCollectionResponse} from './ediscoverySearchCollectionResponse';
import {serializeEdiscoverySearch} from './serializeEdiscoverySearch';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoverySearchCollectionResponse(writer: SerializationWriter, ediscoverySearchCollectionResponse: EdiscoverySearchCollectionResponse | undefined = {} as EdiscoverySearchCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoverySearchCollectionResponse)
        writer.writeCollectionOfObjectValues<EdiscoverySearch>("value", ediscoverySearchCollectionResponse.value, serializeEdiscoverySearch);
}
