import {StoreImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStoreFromDiscriminatorValue(parseNode: ParseNode | undefined) : StoreImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StoreImpl();
}
