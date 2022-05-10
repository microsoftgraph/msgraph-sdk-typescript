import {SetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetImpl();
}
