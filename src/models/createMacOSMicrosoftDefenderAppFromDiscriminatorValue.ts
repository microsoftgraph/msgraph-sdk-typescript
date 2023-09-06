import { deserializeIntoMacOSMicrosoftDefenderApp } from './deserializeIntoMacOSMicrosoftDefenderApp';
import { type MacOSMicrosoftDefenderApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMacOSMicrosoftDefenderAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSMicrosoftDefenderApp;
}
