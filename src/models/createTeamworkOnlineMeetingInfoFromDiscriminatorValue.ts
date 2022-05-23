import {TeamworkOnlineMeetingInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkOnlineMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkOnlineMeetingInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkOnlineMeetingInfoImpl();
}
