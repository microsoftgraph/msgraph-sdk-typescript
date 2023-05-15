import {deserializeIntoRequestorManager} from './deserializeIntoRequestorManager';
import {RequestorManager} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRequestorManagerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRequestorManager;
}
