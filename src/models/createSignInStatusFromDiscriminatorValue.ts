import { deserializeIntoSignInStatus } from './deserializeIntoSignInStatus';
import { type SignInStatus } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSignInStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSignInStatus;
}
