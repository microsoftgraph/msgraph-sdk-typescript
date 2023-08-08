import type {AuthenticationStrengthPolicy} from './authenticationStrengthPolicy';
import type {AuthenticationStrengthPolicyCollectionResponse} from './authenticationStrengthPolicyCollectionResponse';
import {serializeAuthenticationStrengthPolicy} from './serializeAuthenticationStrengthPolicy';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationStrengthPolicyCollectionResponse(writer: SerializationWriter, authenticationStrengthPolicyCollectionResponse: AuthenticationStrengthPolicyCollectionResponse | undefined = {} as AuthenticationStrengthPolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authenticationStrengthPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<AuthenticationStrengthPolicy>("value", authenticationStrengthPolicyCollectionResponse.value, serializeAuthenticationStrengthPolicy);
}
