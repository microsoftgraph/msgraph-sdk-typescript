import {deserializeIntoTeamworkTagMemberCollectionResponse} from './deserializeIntoTeamworkTagMemberCollectionResponse';
import {TeamworkTagMemberCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkTagMemberCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamworkTagMemberCollectionResponse;
}
