import { deserializeIntoAuthentication } from './deserializeIntoAuthentication';
import { type Authentication } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuthenticationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthentication;
}
