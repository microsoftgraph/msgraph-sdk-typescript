import {Message} from '../../../../models/message';
import {serializeBaseDeltaFunctionResponse} from '../../../../models/serializeBaseDeltaFunctionResponse';
import {serializeMessage} from '../../../../models/serializeMessage';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse, writer: SerializationWriter) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<Message>("value", deltaResponse.value, serializeMessage);
}
