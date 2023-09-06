import { deserializeIntoTrimPostRequestBody } from './deserializeIntoTrimPostRequestBody';
import { type TrimPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTrimPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTrimPostRequestBody;
}
