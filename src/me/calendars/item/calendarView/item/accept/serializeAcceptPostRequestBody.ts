import {AcceptPostRequestBody} from './acceptPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAcceptPostRequestBody(acceptPostRequestBody: AcceptPostRequestBody | undefined = {} as AcceptPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("comment", acceptPostRequestBody.comment);
        writer.writeBooleanValue("sendResponse", acceptPostRequestBody.sendResponse);
        writer.writeAdditionalData(acceptPostRequestBody.additionalData);
}
