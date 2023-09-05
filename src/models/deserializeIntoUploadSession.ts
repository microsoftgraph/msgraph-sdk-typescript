import { type UploadSession } from './uploadSession';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUploadSession(uploadSession: UploadSession | undefined = {} as UploadSession) : Record<string, (node: ParseNode) => void> {
    return {
        "expirationDateTime": n => { uploadSession.expirationDateTime = n.getDateValue(); },
        "nextExpectedRanges": n => { uploadSession.nextExpectedRanges = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { uploadSession.odataType = n.getStringValue(); },
        "uploadUrl": n => { uploadSession.uploadUrl = n.getStringValue(); },
    }
}
