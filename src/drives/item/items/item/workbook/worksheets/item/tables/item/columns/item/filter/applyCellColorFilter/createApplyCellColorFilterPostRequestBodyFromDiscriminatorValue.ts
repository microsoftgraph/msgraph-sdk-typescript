import { deserializeIntoApplyCellColorFilterPostRequestBody } from './deserializeIntoApplyCellColorFilterPostRequestBody';
import { type ApplyCellColorFilterPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApplyCellColorFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyCellColorFilterPostRequestBody;
}
