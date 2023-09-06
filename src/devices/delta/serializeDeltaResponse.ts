import { type Device } from '../../models/device';
import { serializeBaseDeltaFunctionResponse } from '../../models/serializeBaseDeltaFunctionResponse';
import { serializeDevice } from '../../models/serializeDevice';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<Device>("value", deltaResponse.value, serializeDevice);
}
