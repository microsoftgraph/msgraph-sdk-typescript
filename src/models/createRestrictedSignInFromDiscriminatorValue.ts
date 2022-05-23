import {RestrictedSignInImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRestrictedSignInFromDiscriminatorValue(parseNode: ParseNode | undefined) : RestrictedSignInImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RestrictedSignInImpl();
}
