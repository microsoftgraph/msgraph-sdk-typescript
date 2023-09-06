import { deserializeIntoApplyTagsPostRequestBody } from './deserializeIntoApplyTagsPostRequestBody';
import { type ApplyTagsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApplyTagsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyTagsPostRequestBody;
}
