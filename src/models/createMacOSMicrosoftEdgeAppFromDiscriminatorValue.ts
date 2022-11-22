import {MacOSMicrosoftEdgeApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSMicrosoftEdgeAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSMicrosoftEdgeApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSMicrosoftEdgeApp();
}
