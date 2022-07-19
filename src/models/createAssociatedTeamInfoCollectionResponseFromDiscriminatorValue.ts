import {AssociatedTeamInfoCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssociatedTeamInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssociatedTeamInfoCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssociatedTeamInfoCollectionResponse();
}
