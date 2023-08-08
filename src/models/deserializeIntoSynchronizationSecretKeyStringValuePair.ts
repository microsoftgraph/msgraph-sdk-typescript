import {SynchronizationSecret} from './synchronizationSecret';
import type {SynchronizationSecretKeyStringValuePair} from './synchronizationSecretKeyStringValuePair';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationSecretKeyStringValuePair(synchronizationSecretKeyStringValuePair: SynchronizationSecretKeyStringValuePair | undefined = {} as SynchronizationSecretKeyStringValuePair) : Record<string, (node: ParseNode) => void> {
    return {
        "key": n => { synchronizationSecretKeyStringValuePair.key = n.getEnumValue<SynchronizationSecret>(SynchronizationSecret); },
        "@odata.type": n => { synchronizationSecretKeyStringValuePair.odataType = n.getStringValue(); },
        "value": n => { synchronizationSecretKeyStringValuePair.value = n.getStringValue(); },
    }
}
