import {WipePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWipePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WipePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WipePostRequestBody();
}
