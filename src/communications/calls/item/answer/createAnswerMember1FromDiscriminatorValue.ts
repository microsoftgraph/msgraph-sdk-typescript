import {AnswerMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAnswerMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : AnswerMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AnswerMember1();
}
