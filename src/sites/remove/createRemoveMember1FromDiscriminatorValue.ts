import {RemoveMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoveMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoveMember1();
}
