import {MacOsLobAppAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOsLobAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOsLobAppAssignmentSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOsLobAppAssignmentSettings();
}
