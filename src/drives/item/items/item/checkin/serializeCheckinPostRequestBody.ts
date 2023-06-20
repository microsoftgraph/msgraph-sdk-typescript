import {CheckinPostRequestBody} from './checkinPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCheckinPostRequestBody(checkinPostRequestBody: CheckinPostRequestBody | undefined = {} as CheckinPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("checkInAs", checkinPostRequestBody.checkInAs);
        writer.writeStringValue("comment", checkinPostRequestBody.comment);
        writer.writeAdditionalData(checkinPostRequestBody.additionalData);
}
