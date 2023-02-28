import {Error_TypePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createError_TypePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Error_TypePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Error_TypePostRequestBody();
}
