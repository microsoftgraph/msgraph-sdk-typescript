import {TentativelyAcceptMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTentativelyAcceptMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : TentativelyAcceptMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TentativelyAcceptMember1();
}
