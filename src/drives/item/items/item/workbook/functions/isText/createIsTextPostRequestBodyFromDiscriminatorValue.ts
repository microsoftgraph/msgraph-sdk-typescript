import {IsTextPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsTextPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IsTextPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IsTextPostRequestBody();
}
