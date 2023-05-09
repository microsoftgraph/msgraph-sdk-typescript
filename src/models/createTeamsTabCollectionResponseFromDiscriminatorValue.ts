import {deserializeIntoTeamsTabCollectionResponse} from './deserializeIntoTeamsTabCollectionResponse';
import {TeamsTabCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsTabCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsTabCollectionResponse;
}
