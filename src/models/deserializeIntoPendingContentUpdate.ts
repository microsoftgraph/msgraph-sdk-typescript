import {PendingContentUpdate} from './pendingContentUpdate';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPendingContentUpdate(pendingContentUpdate: PendingContentUpdate | undefined = {} as PendingContentUpdate) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { pendingContentUpdate.odataType = n.getStringValue(); },
        "queuedDateTime": n => { pendingContentUpdate.queuedDateTime = n.getDateValue(); },
    }
}
