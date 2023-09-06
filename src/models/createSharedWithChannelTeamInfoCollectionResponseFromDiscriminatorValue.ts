import { deserializeIntoSharedWithChannelTeamInfoCollectionResponse } from './deserializeIntoSharedWithChannelTeamInfoCollectionResponse';
import { type SharedWithChannelTeamInfoCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharedWithChannelTeamInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharedWithChannelTeamInfoCollectionResponse;
}
