import {AccrIntPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccrIntPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccrIntPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccrIntPostRequestBody();
}
