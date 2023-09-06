import { deserializeIntoStDevPAPostRequestBody } from './deserializeIntoStDevPAPostRequestBody';
import { type StDevPAPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createStDevPAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStDevPAPostRequestBody;
}
