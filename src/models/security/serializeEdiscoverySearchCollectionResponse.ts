import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoverySearch} from './ediscoverySearch';
import {EdiscoverySearchCollectionResponse} from './ediscoverySearchCollectionResponse';
import {serializeEdiscoverySearch} from './serializeEdiscoverySearch';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoverySearchCollectionResponse(ediscoverySearchCollectionResponse: EdiscoverySearchCollectionResponse | undefined = {} as EdiscoverySearchCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoverySearchCollectionResponse)
        writer.writeCollectionOfObjectValues<EdiscoverySearch>("value", ediscoverySearchCollectionResponse.value, serializeEdiscoverySearch);
}
