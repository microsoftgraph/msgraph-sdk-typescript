import {deserializeIntoAnswerPostRequestBody} from './deserializeIntoAnswerPostRequestBody';
import {AnswerPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAnswerPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAnswerPostRequestBody;
}
