import { deserializeIntoMacOsLobAppAssignmentSettings } from './deserializeIntoMacOsLobAppAssignmentSettings';
import { type MacOsLobAppAssignmentSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMacOsLobAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOsLobAppAssignmentSettings;
}
