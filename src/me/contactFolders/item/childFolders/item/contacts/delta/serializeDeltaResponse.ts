import {Contact} from '../../../../../../../models/contact';
import {serializeBaseDeltaFunctionResponse} from '../../../../../../../models/serializeBaseDeltaFunctionResponse';
import {serializeContact} from '../../../../../../../models/serializeContact';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<Contact>("value", deltaResponse.value, serializeContact);
}
