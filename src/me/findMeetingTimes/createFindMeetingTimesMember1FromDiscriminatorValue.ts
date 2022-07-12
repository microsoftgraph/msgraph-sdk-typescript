import {FindMeetingTimesMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFindMeetingTimesMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : FindMeetingTimesMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FindMeetingTimesMember1();
}
