import {SharedWithChannelTeamInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedWithChannelTeamInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharedWithChannelTeamInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharedWithChannelTeamInfo();
}
