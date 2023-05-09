import {deserializeIntoTeamsAppInstalledEventMessageDetail} from './deserializeIntoTeamsAppInstalledEventMessageDetail';
import {TeamsAppInstalledEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppInstalledEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppInstalledEventMessageDetail;
}
