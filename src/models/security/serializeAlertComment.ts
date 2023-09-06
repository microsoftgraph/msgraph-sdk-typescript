import { type AlertComment } from './alertComment';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAlertComment(writer: SerializationWriter, alertComment: AlertComment | undefined = {} as AlertComment) : void {
        writer.writeStringValue("comment", alertComment.comment);
        writer.writeStringValue("createdByDisplayName", alertComment.createdByDisplayName);
        writer.writeDateValue("createdDateTime", alertComment.createdDateTime);
        writer.writeStringValue("@odata.type", alertComment.odataType);
        writer.writeAdditionalData(alertComment.additionalData);
}
