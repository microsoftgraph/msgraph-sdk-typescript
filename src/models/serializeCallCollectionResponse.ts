import {Call} from './call';
import {CallCollectionResponse} from './callCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCall} from './serializeCall';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallCollectionResponse(writer: SerializationWriter, callCollectionResponse: CallCollectionResponse | undefined = {} as CallCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, callCollectionResponse)
        writer.writeCollectionOfObjectValues<Call>("value", callCollectionResponse.value, serializeCall);
}
