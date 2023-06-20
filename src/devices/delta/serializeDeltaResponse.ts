import {Device} from '../../models/device';
import {serializeBaseDeltaFunctionResponse} from '../../models/serializeBaseDeltaFunctionResponse';
import {serializeDevice} from '../../models/serializeDevice';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse, writer: SerializationWriter) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<Device>("value", deltaResponse.value, serializeDevice);
}
