import { deserializeIntoPendingContentUpdate } from './deserializeIntoPendingContentUpdate';
import { type PendingContentUpdate } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPendingContentUpdateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPendingContentUpdate;
}
