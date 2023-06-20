import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoveryCase} from './ediscoveryCase';
import {EdiscoveryCaseCollectionResponse} from './ediscoveryCaseCollectionResponse';
import {serializeEdiscoveryCase} from './serializeEdiscoveryCase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryCaseCollectionResponse(ediscoveryCaseCollectionResponse: EdiscoveryCaseCollectionResponse | undefined = {} as EdiscoveryCaseCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryCaseCollectionResponse)
        writer.writeCollectionOfObjectValues<EdiscoveryCase>("value", ediscoveryCaseCollectionResponse.value, serializeEdiscoveryCase);
}
