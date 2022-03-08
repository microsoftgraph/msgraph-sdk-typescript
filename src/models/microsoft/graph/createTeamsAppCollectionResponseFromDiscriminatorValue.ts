import {TeamsAppCollectionResponse} from './teamsAppCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAppCollectionResponse();
}
