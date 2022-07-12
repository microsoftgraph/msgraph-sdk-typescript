import {AdminMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdminMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : AdminMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AdminMember1();
}
