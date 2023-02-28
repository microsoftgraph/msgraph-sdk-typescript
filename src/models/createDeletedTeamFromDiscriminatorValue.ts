import {DeletedTeam} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeletedTeamFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeletedTeam {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeletedTeam();
}
