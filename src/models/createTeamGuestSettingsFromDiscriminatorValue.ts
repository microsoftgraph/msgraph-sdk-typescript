import {TeamGuestSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamGuestSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamGuestSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamGuestSettingsImpl();
}
