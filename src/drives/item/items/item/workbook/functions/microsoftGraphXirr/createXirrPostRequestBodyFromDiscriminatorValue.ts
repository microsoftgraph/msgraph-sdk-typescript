import {XirrPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createXirrPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : XirrPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new XirrPostRequestBody();
}
