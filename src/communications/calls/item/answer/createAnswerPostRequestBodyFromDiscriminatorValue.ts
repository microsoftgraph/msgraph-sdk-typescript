import { deserializeIntoAnswerPostRequestBody } from './deserializeIntoAnswerPostRequestBody';
import { type AnswerPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAnswerPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAnswerPostRequestBody;
}
