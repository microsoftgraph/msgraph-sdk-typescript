import {AnswerPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAnswerPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AnswerPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AnswerPostRequestBody();
}
