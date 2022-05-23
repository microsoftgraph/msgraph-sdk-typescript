import {TeamImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamImpl();
}
