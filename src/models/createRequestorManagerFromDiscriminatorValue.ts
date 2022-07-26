import {RequestorManager} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRequestorManagerFromDiscriminatorValue(parseNode: ParseNode | undefined) : RequestorManager {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RequestorManager();
}
