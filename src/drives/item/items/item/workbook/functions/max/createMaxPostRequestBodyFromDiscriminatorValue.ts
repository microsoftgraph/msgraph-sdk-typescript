import {MaxPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMaxPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MaxPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MaxPostRequestBody();
}
