import {TeamworkOnlineMeetingInfo} from './teamworkOnlineMeetingInfo';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkOnlineMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkOnlineMeetingInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkOnlineMeetingInfo();
}
