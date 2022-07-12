import {RestoreMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRestoreMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : RestoreMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RestoreMember1();
}
