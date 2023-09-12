import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { type EdiscoveryCustodian } from './ediscoveryCustodian';
import { type EdiscoveryCustodianCollectionResponse } from './ediscoveryCustodianCollectionResponse';
import { serializeEdiscoveryCustodian } from './serializeEdiscoveryCustodian';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryCustodianCollectionResponse(writer: SerializationWriter, ediscoveryCustodianCollectionResponse: EdiscoveryCustodianCollectionResponse | undefined = {} as EdiscoveryCustodianCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ediscoveryCustodianCollectionResponse)
        writer.writeCollectionOfObjectValues<EdiscoveryCustodian>("value", ediscoveryCustodianCollectionResponse.value, serializeEdiscoveryCustodian);
}
