import {DeletedTeamCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeletedTeamCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeletedTeamCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeletedTeamCollectionResponse();
}
