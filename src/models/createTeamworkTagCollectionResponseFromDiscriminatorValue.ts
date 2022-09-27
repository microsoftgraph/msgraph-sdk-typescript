import {TeamworkTagCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkTagCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkTagCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkTagCollectionResponse();
}
