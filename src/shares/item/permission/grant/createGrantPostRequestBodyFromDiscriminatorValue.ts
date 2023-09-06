import { deserializeIntoGrantPostRequestBody } from './deserializeIntoGrantPostRequestBody';
import { type GrantPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGrantPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGrantPostRequestBody;
}
