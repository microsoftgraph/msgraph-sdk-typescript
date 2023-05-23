import {deserializeIntoSynchronizationSecretKeyStringValuePair} from './deserializeIntoSynchronizationSecretKeyStringValuePair';
import {SynchronizationSecretKeyStringValuePair} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationSecretKeyStringValuePair;
}
