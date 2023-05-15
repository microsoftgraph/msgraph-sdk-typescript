import {ContentApprovalStatusColumn} from './contentApprovalStatusColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContentApprovalStatusColumn(contentApprovalStatusColumn: ContentApprovalStatusColumn | undefined = {} as ContentApprovalStatusColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { contentApprovalStatusColumn.odataType = n.getStringValue(); },
    }
}
