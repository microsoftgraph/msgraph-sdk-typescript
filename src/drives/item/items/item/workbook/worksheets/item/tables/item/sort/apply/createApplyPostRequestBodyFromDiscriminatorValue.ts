import {ApplyPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplyPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplyPostRequestBody();
}
