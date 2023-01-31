import {DiscPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDiscPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DiscPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DiscPostRequestBody();
}
