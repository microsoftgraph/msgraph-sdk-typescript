import {IsErrPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsErrPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IsErrPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IsErrPostRequestBody();
}
