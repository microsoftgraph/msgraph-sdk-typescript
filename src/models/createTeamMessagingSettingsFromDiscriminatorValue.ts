import {deserializeIntoTeamMessagingSettings} from './deserializeIntoTeamMessagingSettings';
import {TeamMessagingSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamMessagingSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamMessagingSettings;
}
