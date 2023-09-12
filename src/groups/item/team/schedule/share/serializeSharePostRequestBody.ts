import { type SharePostRequestBody } from './sharePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSharePostRequestBody(writer: SerializationWriter, sharePostRequestBody: SharePostRequestBody | undefined = {} as SharePostRequestBody) : void {
        writer.writeDateValue("endDateTime", sharePostRequestBody.endDateTime);
        writer.writeBooleanValue("notifyTeam", sharePostRequestBody.notifyTeam);
        writer.writeDateValue("startDateTime", sharePostRequestBody.startDateTime);
        writer.writeAdditionalData(sharePostRequestBody.additionalData);
}
