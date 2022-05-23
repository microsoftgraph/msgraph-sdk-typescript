import {SignInLocationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSignInLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SignInLocationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SignInLocationImpl();
}
