import {MembersLeftEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMembersLeftEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : MembersLeftEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MembersLeftEventMessageDetailImpl();
}
