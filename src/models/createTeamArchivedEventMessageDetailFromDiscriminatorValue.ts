import {deserializeIntoTeamArchivedEventMessageDetail} from './deserializeIntoTeamArchivedEventMessageDetail';
import {TeamArchivedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamArchivedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamArchivedEventMessageDetail;
}
