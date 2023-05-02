import {deserializeIntoTeamworkTagCollectionResponse} from './deserializeIntoTeamworkTagCollectionResponse';
import {TeamworkTagCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkTagCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamworkTagCollectionResponse;
}
