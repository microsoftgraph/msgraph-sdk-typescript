import { type ContentApprovalStatusColumn } from './contentApprovalStatusColumn';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoContentApprovalStatusColumn(contentApprovalStatusColumn: ContentApprovalStatusColumn | undefined = {} as ContentApprovalStatusColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { contentApprovalStatusColumn.odataType = n.getStringValue(); },
    }
}
