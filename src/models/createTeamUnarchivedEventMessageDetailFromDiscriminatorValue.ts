import {TeamUnarchivedEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamUnarchivedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamUnarchivedEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamUnarchivedEventMessageDetailImpl();
}
