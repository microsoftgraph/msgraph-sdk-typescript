import {BasePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBasePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BasePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BasePostRequestBody();
}
