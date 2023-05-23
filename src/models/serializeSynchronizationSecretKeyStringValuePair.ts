import {SynchronizationSecret} from './synchronizationSecret';
import {SynchronizationSecretKeyStringValuePair} from './synchronizationSecretKeyStringValuePair';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationSecretKeyStringValuePair(writer: SerializationWriter, synchronizationSecretKeyStringValuePair: SynchronizationSecretKeyStringValuePair | undefined = {} as SynchronizationSecretKeyStringValuePair) : void {
        writer.writeEnumValue<SynchronizationSecret>("key", synchronizationSecretKeyStringValuePair.key);
        writer.writeStringValue("@odata.type", synchronizationSecretKeyStringValuePair.odataType);
        writer.writeStringValue("value", synchronizationSecretKeyStringValuePair.value);
        writer.writeAdditionalData(synchronizationSecretKeyStringValuePair.additionalData);
}
