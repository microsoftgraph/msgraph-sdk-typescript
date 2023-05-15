import {deserializeIntoRemoteLockActionResult} from './deserializeIntoRemoteLockActionResult';
import {RemoteLockActionResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoteLockActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemoteLockActionResult;
}
