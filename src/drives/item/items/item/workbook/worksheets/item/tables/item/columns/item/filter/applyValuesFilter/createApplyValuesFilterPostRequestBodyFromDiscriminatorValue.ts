import { deserializeIntoApplyValuesFilterPostRequestBody } from './deserializeIntoApplyValuesFilterPostRequestBody';
import { type ApplyValuesFilterPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApplyValuesFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyValuesFilterPostRequestBody;
}
