import {IsErrorPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsErrorPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IsErrorPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IsErrorPostRequestBody();
}
