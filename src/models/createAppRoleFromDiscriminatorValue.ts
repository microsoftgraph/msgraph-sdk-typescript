import {AppRoleImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppRoleFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppRoleImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppRoleImpl();
}
