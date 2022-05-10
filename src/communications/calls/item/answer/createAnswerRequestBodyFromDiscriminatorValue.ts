import {AnswerRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAnswerRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AnswerRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AnswerRequestBodyImpl();
}
