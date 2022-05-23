import {ItemActivityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemActivityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemActivityImpl();
}
