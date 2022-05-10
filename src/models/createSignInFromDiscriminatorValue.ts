import {SignInImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSignInFromDiscriminatorValue(parseNode: ParseNode | undefined) : SignInImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SignInImpl();
}
