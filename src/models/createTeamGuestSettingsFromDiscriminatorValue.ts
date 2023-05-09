import {deserializeIntoTeamGuestSettings} from './deserializeIntoTeamGuestSettings';
import {TeamGuestSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamGuestSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamGuestSettings;
}
