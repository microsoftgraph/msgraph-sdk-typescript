import {SignInStatus} from './signInStatus';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSignInStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : SignInStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SignInStatus();
}
