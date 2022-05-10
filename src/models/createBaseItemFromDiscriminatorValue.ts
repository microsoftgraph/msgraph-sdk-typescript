import {BaseItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBaseItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : BaseItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BaseItemImpl();
}
