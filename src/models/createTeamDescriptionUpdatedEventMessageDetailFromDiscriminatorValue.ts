import {deserializeIntoTeamDescriptionUpdatedEventMessageDetail} from './deserializeIntoTeamDescriptionUpdatedEventMessageDetail';
import {TeamDescriptionUpdatedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamDescriptionUpdatedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamDescriptionUpdatedEventMessageDetail;
}
