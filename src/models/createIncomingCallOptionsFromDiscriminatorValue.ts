import {deserializeIntoIncomingCallOptions} from './deserializeIntoIncomingCallOptions';
import {IncomingCallOptions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIncomingCallOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIncomingCallOptions;
}
