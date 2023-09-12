import { deserializeIntoRemoteLockActionResult } from './deserializeIntoRemoteLockActionResult';
import { type RemoteLockActionResult } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRemoteLockActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemoteLockActionResult;
}
