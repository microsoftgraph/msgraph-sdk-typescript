import {TeamMessagingSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamMessagingSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamMessagingSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamMessagingSettingsImpl();
}
