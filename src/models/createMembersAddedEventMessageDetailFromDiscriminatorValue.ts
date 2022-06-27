import {MembersAddedEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMembersAddedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : MembersAddedEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MembersAddedEventMessageDetailImpl();
}
