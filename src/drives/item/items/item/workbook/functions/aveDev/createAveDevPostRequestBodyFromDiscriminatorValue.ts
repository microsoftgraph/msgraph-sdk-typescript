import { deserializeIntoAveDevPostRequestBody } from './deserializeIntoAveDevPostRequestBody';
import { type AveDevPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAveDevPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAveDevPostRequestBody;
}
