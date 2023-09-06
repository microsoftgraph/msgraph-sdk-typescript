import { type Event } from '../../../models/event';
import { serializeBaseDeltaFunctionResponse } from '../../../models/serializeBaseDeltaFunctionResponse';
import { serializeEvent } from '../../../models/serializeEvent';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<Event>("value", deltaResponse.value, serializeEvent);
}
