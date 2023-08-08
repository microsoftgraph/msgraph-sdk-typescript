import type {AcceptPostRequestBody} from './acceptPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAcceptPostRequestBody(writer: SerializationWriter, acceptPostRequestBody: AcceptPostRequestBody | undefined = {} as AcceptPostRequestBody) : void {
        writer.writeStringValue("comment", acceptPostRequestBody.comment);
        writer.writeBooleanValue("sendResponse", acceptPostRequestBody.sendResponse);
        writer.writeAdditionalData(acceptPostRequestBody.additionalData);
}
