import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoveryCustodian} from './ediscoveryCustodian';
import {EdiscoveryCustodianCollectionResponse} from './ediscoveryCustodianCollectionResponse';
import {serializeEdiscoveryCustodian} from './serializeEdiscoveryCustodian';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryCustodianCollectionResponse(ediscoveryCustodianCollectionResponse: EdiscoveryCustodianCollectionResponse | undefined = {} as EdiscoveryCustodianCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryCustodianCollectionResponse)
        writer.writeCollectionOfObjectValues<EdiscoveryCustodian>("value", ediscoveryCustodianCollectionResponse.value, serializeEdiscoveryCustodian);
}
