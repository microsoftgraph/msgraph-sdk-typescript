import { type AuthenticationStrengthPolicy } from './authenticationStrengthPolicy';
import { type AuthenticationStrengthPolicyCollectionResponse } from './authenticationStrengthPolicyCollectionResponse';
import { createAuthenticationStrengthPolicyFromDiscriminatorValue } from './createAuthenticationStrengthPolicyFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAuthenticationStrengthPolicy } from './serializeAuthenticationStrengthPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationStrengthPolicyCollectionResponse(authenticationStrengthPolicyCollectionResponse: AuthenticationStrengthPolicyCollectionResponse | undefined = {} as AuthenticationStrengthPolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(authenticationStrengthPolicyCollectionResponse),
        "value": n => { authenticationStrengthPolicyCollectionResponse.value = n.getCollectionOfObjectValues<AuthenticationStrengthPolicy>(createAuthenticationStrengthPolicyFromDiscriminatorValue); },
    }
}
