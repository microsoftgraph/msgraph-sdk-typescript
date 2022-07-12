import {GetScheduleMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetScheduleMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetScheduleMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetScheduleMember1();
}
