import {TeamMemberSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamMemberSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamMemberSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamMemberSettingsImpl();
}
