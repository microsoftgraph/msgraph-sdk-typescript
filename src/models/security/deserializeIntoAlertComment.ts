import { type AlertComment } from './alertComment';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAlertComment(alertComment: AlertComment | undefined = {} as AlertComment) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { alertComment.comment = n.getStringValue(); },
        "createdByDisplayName": n => { alertComment.createdByDisplayName = n.getStringValue(); },
        "createdDateTime": n => { alertComment.createdDateTime = n.getDateValue(); },
        "@odata.type": n => { alertComment.odataType = n.getStringValue(); },
    }
}
