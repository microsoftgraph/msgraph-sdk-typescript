import { deserializeIntoSignIn } from './deserializeIntoSignIn';
import { type SignIn } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSignInFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSignIn;
}
