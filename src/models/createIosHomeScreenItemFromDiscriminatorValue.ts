import {IosHomeScreenItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosHomeScreenItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosHomeScreenItem();
}
