import { deserializeIntoMaxAPostRequestBody } from './deserializeIntoMaxAPostRequestBody';
import { type MaxAPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMaxAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMaxAPostRequestBody;
}
