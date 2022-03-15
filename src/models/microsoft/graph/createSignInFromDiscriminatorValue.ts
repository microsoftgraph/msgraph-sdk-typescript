import {SignIn} from './signIn';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSignInFromDiscriminatorValue(parseNode: ParseNode | undefined) : SignIn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SignIn();
}
