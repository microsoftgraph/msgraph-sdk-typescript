import {TeamsAppInstalledEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppInstalledEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppInstalledEventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAppInstalledEventMessageDetail();
}
