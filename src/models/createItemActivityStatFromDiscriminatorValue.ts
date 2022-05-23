import {ItemActivityStatImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemActivityStatFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemActivityStatImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemActivityStatImpl();
}
