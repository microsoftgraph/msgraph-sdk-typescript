import {deserializeIntoMacOsLobAppAssignmentSettings} from './deserializeIntoMacOsLobAppAssignmentSettings';
import {MacOsLobAppAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOsLobAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOsLobAppAssignmentSettings;
}
