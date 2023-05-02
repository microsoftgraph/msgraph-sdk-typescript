import {deserializeIntoMacOSMicrosoftEdgeApp} from './deserializeIntoMacOSMicrosoftEdgeApp';
import {MacOSMicrosoftEdgeApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSMicrosoftEdgeAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSMicrosoftEdgeApp;
}
