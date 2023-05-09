import {deserializeIntoIosLobAppAssignmentSettings} from './deserializeIntoIosLobAppAssignmentSettings';
import {IosLobAppAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosLobAppAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosLobAppAssignmentSettings;
}
