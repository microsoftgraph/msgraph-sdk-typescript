import { deserializeIntoTeamGuestSettings } from './deserializeIntoTeamGuestSettings';
import { type TeamGuestSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamGuestSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamGuestSettings;
}
