import { deserializeIntoSignInActivity } from './deserializeIntoSignInActivity';
import { type SignInActivity } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSignInActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSignInActivity;
}
