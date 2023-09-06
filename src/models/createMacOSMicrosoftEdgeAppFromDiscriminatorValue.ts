import { deserializeIntoMacOSMicrosoftEdgeApp } from './deserializeIntoMacOSMicrosoftEdgeApp';
import { type MacOSMicrosoftEdgeApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMacOSMicrosoftEdgeAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSMicrosoftEdgeApp;
}
