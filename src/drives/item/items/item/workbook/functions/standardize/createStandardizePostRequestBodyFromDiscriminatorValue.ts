import { deserializeIntoStandardizePostRequestBody } from './deserializeIntoStandardizePostRequestBody';
import { type StandardizePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createStandardizePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStandardizePostRequestBody;
}
