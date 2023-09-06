import { deserializeIntoTeamMessagingSettings } from './deserializeIntoTeamMessagingSettings';
import { type TeamMessagingSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamMessagingSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamMessagingSettings;
}
