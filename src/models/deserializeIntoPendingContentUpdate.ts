import { type PendingContentUpdate } from './pendingContentUpdate';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPendingContentUpdate(pendingContentUpdate: PendingContentUpdate | undefined = {} as PendingContentUpdate) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { pendingContentUpdate.odataType = n.getStringValue(); },
        "queuedDateTime": n => { pendingContentUpdate.queuedDateTime = n.getDateValue(); },
    }
}
