import {deserializeIntoStore} from './deserializeIntoStore';
import {Store} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStoreFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStore;
}
