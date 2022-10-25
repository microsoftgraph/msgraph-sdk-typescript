import {AuthenticationContextClassReference} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationContextClassReferenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationContextClassReference {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationContextClassReference();
}
