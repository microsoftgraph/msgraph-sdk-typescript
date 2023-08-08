import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import type {EdiscoveryCase} from './ediscoveryCase';
import type {EdiscoveryCaseCollectionResponse} from './ediscoveryCaseCollectionResponse';
import {serializeEdiscoveryCase} from './serializeEdiscoveryCase';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryCaseCollectionResponse(writer: SerializationWriter, ediscoveryCaseCollectionResponse: EdiscoveryCaseCollectionResponse | undefined = {} as EdiscoveryCaseCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryCaseCollectionResponse)
        writer.writeCollectionOfObjectValues<EdiscoveryCase>("value", ediscoveryCaseCollectionResponse.value, serializeEdiscoveryCase);
}
