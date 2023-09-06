import { deserializeIntoGetMailTipsResponse } from './deserializeIntoGetMailTipsResponse';
import { type GetMailTipsResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetMailTipsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetMailTipsResponse;
}
