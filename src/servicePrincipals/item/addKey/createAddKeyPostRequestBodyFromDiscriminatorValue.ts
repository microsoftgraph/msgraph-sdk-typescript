import { deserializeIntoAddKeyPostRequestBody } from './deserializeIntoAddKeyPostRequestBody';
import { type AddKeyPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAddKeyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddKeyPostRequestBody;
}
