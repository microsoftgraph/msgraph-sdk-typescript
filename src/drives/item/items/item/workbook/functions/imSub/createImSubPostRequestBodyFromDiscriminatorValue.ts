import {ImSubPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImSubPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImSubPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImSubPostRequestBody();
}
