import {RecentMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecentMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : RecentMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecentMember1();
}
