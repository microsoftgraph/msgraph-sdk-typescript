import {ApplyTagsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyTagsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplyTagsPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplyTagsPostRequestBody();
}
