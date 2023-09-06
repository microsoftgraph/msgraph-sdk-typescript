import { deserializeIntoKurtPostRequestBody } from './deserializeIntoKurtPostRequestBody';
import { type KurtPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createKurtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKurtPostRequestBody;
}
