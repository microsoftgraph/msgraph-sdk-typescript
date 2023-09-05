import { type CheckinPostRequestBody } from './checkinPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCheckinPostRequestBody(writer: SerializationWriter, checkinPostRequestBody: CheckinPostRequestBody | undefined = {} as CheckinPostRequestBody) : void {
        writer.writeStringValue("checkInAs", checkinPostRequestBody.checkInAs);
        writer.writeStringValue("comment", checkinPostRequestBody.comment);
        writer.writeAdditionalData(checkinPostRequestBody.additionalData);
}
