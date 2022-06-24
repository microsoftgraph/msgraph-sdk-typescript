import {IosStoreAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosStoreAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosStoreAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosStoreAppImpl();
}
