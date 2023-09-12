import { deserializeIntoMdurationPostRequestBody } from './deserializeIntoMdurationPostRequestBody';
import { type MdurationPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMdurationPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMdurationPostRequestBody;
}
