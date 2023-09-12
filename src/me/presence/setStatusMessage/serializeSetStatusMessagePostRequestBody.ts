import { type PresenceStatusMessage } from '../../../models/presenceStatusMessage';
import { serializePresenceStatusMessage } from '../../../models/serializePresenceStatusMessage';
import { type SetStatusMessagePostRequestBody } from './setStatusMessagePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSetStatusMessagePostRequestBody(writer: SerializationWriter, setStatusMessagePostRequestBody: SetStatusMessagePostRequestBody | undefined = {} as SetStatusMessagePostRequestBody) : void {
        writer.writeObjectValue<PresenceStatusMessage>("statusMessage", setStatusMessagePostRequestBody.statusMessage, serializePresenceStatusMessage);
        writer.writeAdditionalData(setStatusMessagePostRequestBody.additionalData);
}
