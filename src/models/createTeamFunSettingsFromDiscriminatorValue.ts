import {TeamFunSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamFunSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamFunSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamFunSettingsImpl();
}
