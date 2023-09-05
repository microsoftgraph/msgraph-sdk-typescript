import { type Call } from './call';
import { type CallCollectionResponse } from './callCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeCall } from './serializeCall';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCallCollectionResponse(writer: SerializationWriter, callCollectionResponse: CallCollectionResponse | undefined = {} as CallCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, callCollectionResponse)
        writer.writeCollectionOfObjectValues<Call>("value", callCollectionResponse.value, serializeCall);
}
