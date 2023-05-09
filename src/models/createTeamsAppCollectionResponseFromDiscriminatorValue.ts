import {deserializeIntoTeamsAppCollectionResponse} from './deserializeIntoTeamsAppCollectionResponse';
import {TeamsAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppCollectionResponse;
}
