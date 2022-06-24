import {IosHomeScreenItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosHomeScreenItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosHomeScreenItemImpl();
}
