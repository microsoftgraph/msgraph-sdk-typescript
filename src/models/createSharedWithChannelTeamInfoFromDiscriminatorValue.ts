import {SharedWithChannelTeamInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedWithChannelTeamInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharedWithChannelTeamInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharedWithChannelTeamInfoImpl();
}
