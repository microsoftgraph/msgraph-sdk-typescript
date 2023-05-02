import {deserializeIntoTeamCollectionResponse} from './deserializeIntoTeamCollectionResponse';
import {TeamCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamCollectionResponse;
}
