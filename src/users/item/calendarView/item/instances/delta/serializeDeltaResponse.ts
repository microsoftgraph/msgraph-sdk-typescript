import {Event} from '../../../../../../models/event';
import {serializeBaseDeltaFunctionResponse} from '../../../../../../models/serializeBaseDeltaFunctionResponse';
import {serializeEvent} from '../../../../../../models/serializeEvent';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse, writer: SerializationWriter) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<Event>("value", deltaResponse.value, serializeEvent);
}
