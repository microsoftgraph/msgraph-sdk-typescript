import {deserializeIntoCall} from './deserializeIntoCall';
import {Call} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCall;
}
