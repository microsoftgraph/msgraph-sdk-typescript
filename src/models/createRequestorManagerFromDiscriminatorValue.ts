import {RequestorManagerImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRequestorManagerFromDiscriminatorValue(parseNode: ParseNode | undefined) : RequestorManagerImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RequestorManagerImpl();
}
