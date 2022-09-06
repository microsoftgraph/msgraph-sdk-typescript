import {MembersDeletedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMembersDeletedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : MembersDeletedEventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MembersDeletedEventMessageDetail();
}
