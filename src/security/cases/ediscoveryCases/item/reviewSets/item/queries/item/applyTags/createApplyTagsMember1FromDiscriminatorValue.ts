import {ApplyTagsMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyTagsMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplyTagsMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplyTagsMember1();
}
