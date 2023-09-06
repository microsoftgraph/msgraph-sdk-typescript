import { deserializeIntoApplyFontColorFilterPostRequestBody } from './deserializeIntoApplyFontColorFilterPostRequestBody';
import { type ApplyFontColorFilterPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApplyFontColorFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyFontColorFilterPostRequestBody;
}
