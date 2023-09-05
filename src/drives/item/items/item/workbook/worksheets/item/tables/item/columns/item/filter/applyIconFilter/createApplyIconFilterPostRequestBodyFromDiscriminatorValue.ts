import { deserializeIntoApplyIconFilterPostRequestBody } from './deserializeIntoApplyIconFilterPostRequestBody';
import { type ApplyIconFilterPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApplyIconFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyIconFilterPostRequestBody;
}
