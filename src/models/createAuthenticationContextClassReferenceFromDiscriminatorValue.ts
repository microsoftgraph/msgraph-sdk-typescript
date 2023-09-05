import { deserializeIntoAuthenticationContextClassReference } from './deserializeIntoAuthenticationContextClassReference';
import { type AuthenticationContextClassReference } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuthenticationContextClassReferenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationContextClassReference;
}
