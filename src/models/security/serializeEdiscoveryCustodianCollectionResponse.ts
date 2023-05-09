import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {EdiscoveryCustodian} from './ediscoveryCustodian';
import {EdiscoveryCustodianCollectionResponse} from './ediscoveryCustodianCollectionResponse';
import {serializeEdiscoveryCustodian} from './serializeEdiscoveryCustodian';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryCustodianCollectionResponse(writer: SerializationWriter, ediscoveryCustodianCollectionResponse: EdiscoveryCustodianCollectionResponse | undefined = {} as EdiscoveryCustodianCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryCustodianCollectionResponse)
        writer.writeCollectionOfObjectValues<EdiscoveryCustodian>("value", ediscoveryCustodianCollectionResponse.value, serializeEdiscoveryCustodian);
}
