import { deserializeIntoLeftbPostRequestBody } from './deserializeIntoLeftbPostRequestBody';
import { type LeftbPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLeftbPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLeftbPostRequestBody;
}
