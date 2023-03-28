import {SignInActivity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSignInActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) : SignInActivity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SignInActivity();
}
