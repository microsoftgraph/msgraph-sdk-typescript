import { type ContactFolder } from '../../../../models/contactFolder';
import { serializeBaseDeltaFunctionResponse } from '../../../../models/serializeBaseDeltaFunctionResponse';
import { serializeContactFolder } from '../../../../models/serializeContactFolder';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<ContactFolder>("value", deltaResponse.value, serializeContactFolder);
}
