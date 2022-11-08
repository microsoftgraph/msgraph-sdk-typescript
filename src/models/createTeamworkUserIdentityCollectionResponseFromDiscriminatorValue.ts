import {TeamworkUserIdentityCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkUserIdentityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkUserIdentityCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkUserIdentityCollectionResponse();
}
