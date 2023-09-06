import { deserializeIntoIosLobAppAssignmentSettings } from './deserializeIntoIosLobAppAssignmentSettings';
import { type IosLobAppAssignmentSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosLobAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosLobAppAssignmentSettings;
}
