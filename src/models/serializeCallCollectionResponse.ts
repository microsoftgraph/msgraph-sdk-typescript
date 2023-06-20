import {Call} from './call';
import {CallCollectionResponse} from './callCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCall} from './serializeCall';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallCollectionResponse(callCollectionResponse: CallCollectionResponse | undefined = {} as CallCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, callCollectionResponse)
        writer.writeCollectionOfObjectValues<Call>("value", callCollectionResponse.value, serializeCall);
}
