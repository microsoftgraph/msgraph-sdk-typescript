import {RemoteLockActionResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoteLockActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoteLockActionResult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoteLockActionResult();
}
