import {TeamDescriptionUpdatedEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamDescriptionUpdatedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamDescriptionUpdatedEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamDescriptionUpdatedEventMessageDetailImpl();
}
