import { type SecureScoreControlStateUpdate } from './secureScoreControlStateUpdate';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSecureScoreControlStateUpdate(secureScoreControlStateUpdate: SecureScoreControlStateUpdate | undefined = {} as SecureScoreControlStateUpdate) : Record<string, (node: ParseNode) => void> {
    return {
        "assignedTo": n => { secureScoreControlStateUpdate.assignedTo = n.getStringValue(); },
        "comment": n => { secureScoreControlStateUpdate.comment = n.getStringValue(); },
        "@odata.type": n => { secureScoreControlStateUpdate.odataType = n.getStringValue(); },
        "state": n => { secureScoreControlStateUpdate.state = n.getStringValue(); },
        "updatedBy": n => { secureScoreControlStateUpdate.updatedBy = n.getStringValue(); },
        "updatedDateTime": n => { secureScoreControlStateUpdate.updatedDateTime = n.getDateValue(); },
    }
}
