import type {Message} from '../../../../../../../models/message';
import {serializeBaseDeltaFunctionResponse} from '../../../../../../../models/serializeBaseDeltaFunctionResponse';
import {serializeMessage} from '../../../../../../../models/serializeMessage';
import type {DeltaResponse} from './deltaResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<Message>("value", deltaResponse.value, serializeMessage);
}
