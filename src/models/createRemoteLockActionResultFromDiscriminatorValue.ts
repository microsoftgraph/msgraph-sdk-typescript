import {RemoteLockActionResultImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoteLockActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoteLockActionResultImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoteLockActionResultImpl();
}
