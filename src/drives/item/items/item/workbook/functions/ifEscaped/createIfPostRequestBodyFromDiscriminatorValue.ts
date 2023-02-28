import {IfPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIfPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IfPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IfPostRequestBody();
}
