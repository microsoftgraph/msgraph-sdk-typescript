import { type Application } from '../../models/application';
import { serializeApplication } from '../../models/serializeApplication';
import { serializeBaseDeltaFunctionResponse } from '../../models/serializeBaseDeltaFunctionResponse';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<Application>("value", deltaResponse.value, serializeApplication);
}
