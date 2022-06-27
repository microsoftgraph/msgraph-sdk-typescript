import {TeamsAppRemovedEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppRemovedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppRemovedEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAppRemovedEventMessageDetailImpl();
}
