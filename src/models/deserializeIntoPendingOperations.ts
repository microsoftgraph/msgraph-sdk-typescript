import {createPendingContentUpdateFromDiscriminatorValue} from './createPendingContentUpdateFromDiscriminatorValue';
import {PendingContentUpdate} from './pendingContentUpdate';
import {PendingOperations} from './pendingOperations';
import {serializePendingContentUpdate} from './serializePendingContentUpdate';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPendingOperations(pendingOperations: PendingOperations | undefined = {} as PendingOperations) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { pendingOperations.odataType = n.getStringValue(); },
        "pendingContentUpdate": n => { pendingOperations.pendingContentUpdate = n.getObjectValue<PendingContentUpdate>(createPendingContentUpdateFromDiscriminatorValue); },
    }
}
