import {ContentApprovalStatusColumn} from './contentApprovalStatusColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContentApprovalStatusColumn(contentApprovalStatusColumn: ContentApprovalStatusColumn | undefined = {} as ContentApprovalStatusColumn, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", contentApprovalStatusColumn.odataType);
        writer.writeAdditionalData(contentApprovalStatusColumn.additionalData);
}
