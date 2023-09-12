import { deserializeIntoTeamsAppInstalledEventMessageDetail } from './deserializeIntoTeamsAppInstalledEventMessageDetail';
import { type TeamsAppInstalledEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsAppInstalledEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppInstalledEventMessageDetail;
}
