import {TeamCollectionResponse} from './teamCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamCollectionResponse();
}
