import {deserializeIntoTeamworkOnlineMeetingInfo} from './deserializeIntoTeamworkOnlineMeetingInfo';
import {TeamworkOnlineMeetingInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkOnlineMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamworkOnlineMeetingInfo;
}
