import {TargetAppsMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetAppsMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetAppsMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetAppsMember1();
}
