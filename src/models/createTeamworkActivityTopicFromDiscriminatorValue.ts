import {TeamworkActivityTopicImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkActivityTopicFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkActivityTopicImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkActivityTopicImpl();
}
