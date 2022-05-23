import {AdminImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdminFromDiscriminatorValue(parseNode: ParseNode | undefined) : AdminImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AdminImpl();
}
