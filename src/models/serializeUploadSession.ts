import { type UploadSession } from './uploadSession';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUploadSession(writer: SerializationWriter, uploadSession: UploadSession | undefined = {} as UploadSession) : void {
        writer.writeDateValue("expirationDateTime", uploadSession.expirationDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("nextExpectedRanges", uploadSession.nextExpectedRanges);
        writer.writeStringValue("@odata.type", uploadSession.odataType);
        writer.writeStringValue("uploadUrl", uploadSession.uploadUrl);
        writer.writeAdditionalData(uploadSession.additionalData);
}
