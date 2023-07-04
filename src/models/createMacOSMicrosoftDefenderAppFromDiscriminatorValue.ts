import {deserializeIntoMacOSMicrosoftDefenderApp} from './deserializeIntoMacOSMicrosoftDefenderApp';
import {MacOSMicrosoftDefenderApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSMicrosoftDefenderAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSMicrosoftDefenderApp;
}
