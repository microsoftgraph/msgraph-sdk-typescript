import {TeamworkTagMemberCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkTagMemberCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkTagMemberCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkTagMemberCollectionResponse();
}
