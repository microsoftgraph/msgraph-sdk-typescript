import { deserializeIntoApplyDynamicFilterPostRequestBody } from './deserializeIntoApplyDynamicFilterPostRequestBody';
import { type ApplyDynamicFilterPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApplyDynamicFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyDynamicFilterPostRequestBody;
}
