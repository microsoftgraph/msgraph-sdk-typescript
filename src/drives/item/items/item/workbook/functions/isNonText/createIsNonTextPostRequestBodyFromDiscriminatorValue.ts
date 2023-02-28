import {IsNonTextPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsNonTextPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IsNonTextPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IsNonTextPostRequestBody();
}
