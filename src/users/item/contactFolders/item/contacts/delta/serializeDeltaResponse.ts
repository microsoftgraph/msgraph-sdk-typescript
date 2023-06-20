import {Contact} from '../../../../../../models/contact';
import {serializeBaseDeltaFunctionResponse} from '../../../../../../models/serializeBaseDeltaFunctionResponse';
import {serializeContact} from '../../../../../../models/serializeContact';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse, writer: SerializationWriter) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<Contact>("value", deltaResponse.value, serializeContact);
}
