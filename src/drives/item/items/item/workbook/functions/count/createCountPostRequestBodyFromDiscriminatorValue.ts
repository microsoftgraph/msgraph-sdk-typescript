import {CountPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCountPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CountPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CountPostRequestBody();
}
