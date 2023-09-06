import { deserializeIntoSyncPostRequestBody } from './deserializeIntoSyncPostRequestBody';
import { type SyncPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSyncPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSyncPostRequestBody;
}
