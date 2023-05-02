import {deserializeIntoSharedWithChannelTeamInfoCollectionResponse} from './deserializeIntoSharedWithChannelTeamInfoCollectionResponse';
import {SharedWithChannelTeamInfoCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedWithChannelTeamInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharedWithChannelTeamInfoCollectionResponse;
}
