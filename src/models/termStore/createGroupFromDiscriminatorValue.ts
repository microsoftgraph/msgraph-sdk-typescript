import {GroupImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : GroupImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GroupImpl();
}
