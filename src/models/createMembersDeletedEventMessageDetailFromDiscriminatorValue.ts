import {MembersDeletedEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMembersDeletedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : MembersDeletedEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MembersDeletedEventMessageDetailImpl();
}
