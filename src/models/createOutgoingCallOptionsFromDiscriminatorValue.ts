import {OutgoingCallOptions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutgoingCallOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : OutgoingCallOptions {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OutgoingCallOptions();
}
