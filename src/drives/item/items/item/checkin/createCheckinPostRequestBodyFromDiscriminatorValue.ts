import { deserializeIntoCheckinPostRequestBody } from './deserializeIntoCheckinPostRequestBody';
import { type CheckinPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCheckinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCheckinPostRequestBody;
}
