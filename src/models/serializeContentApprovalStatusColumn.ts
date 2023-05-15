import {ContentApprovalStatusColumn} from './contentApprovalStatusColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContentApprovalStatusColumn(writer: SerializationWriter, contentApprovalStatusColumn: ContentApprovalStatusColumn | undefined = {} as ContentApprovalStatusColumn) : void {
        writer.writeStringValue("@odata.type", contentApprovalStatusColumn.odataType);
        writer.writeAdditionalData(contentApprovalStatusColumn.additionalData);
}
