import {AccrIntMPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccrIntMPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccrIntMPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccrIntMPostRequestBody();
}
