import { deserializeIntoIsNAPostRequestBody } from './deserializeIntoIsNAPostRequestBody';
import { type IsNAPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIsNAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsNAPostRequestBody;
}
