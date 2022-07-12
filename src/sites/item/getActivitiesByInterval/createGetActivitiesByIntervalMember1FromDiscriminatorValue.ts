import {GetActivitiesByIntervalMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetActivitiesByIntervalMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetActivitiesByIntervalMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetActivitiesByIntervalMember1();
}
