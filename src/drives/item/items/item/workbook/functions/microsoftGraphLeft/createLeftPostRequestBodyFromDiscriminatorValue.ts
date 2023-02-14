import {LeftPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLeftPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : LeftPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LeftPostRequestBody();
}
