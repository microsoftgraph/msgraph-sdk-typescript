import {ContactFolder} from '../../../models/contactFolder';
import {serializeBaseDeltaFunctionResponse} from '../../../models/serializeBaseDeltaFunctionResponse';
import {serializeContactFolder} from '../../../models/serializeContactFolder';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse, writer: SerializationWriter) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<ContactFolder>("value", deltaResponse.value, serializeContactFolder);
}
