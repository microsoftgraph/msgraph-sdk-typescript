import { deserializeIntoBasicAuthentication } from './deserializeIntoBasicAuthentication';
import { type BasicAuthentication } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBasicAuthenticationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBasicAuthentication;
}
