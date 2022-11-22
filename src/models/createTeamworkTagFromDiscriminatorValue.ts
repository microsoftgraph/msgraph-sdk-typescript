import {TeamworkTag} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkTagFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkTag {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkTag();
}
