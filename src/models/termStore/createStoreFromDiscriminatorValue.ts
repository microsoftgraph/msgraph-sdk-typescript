import { deserializeIntoStore } from './deserializeIntoStore';
import { type Store } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createStoreFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStore;
}
