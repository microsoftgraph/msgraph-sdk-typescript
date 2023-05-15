import {deserializeIntoTeamworkTag} from './deserializeIntoTeamworkTag';
import {TeamworkTag} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkTagFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamworkTag;
}
