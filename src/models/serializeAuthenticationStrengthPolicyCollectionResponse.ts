import {AuthenticationStrengthPolicy} from './authenticationStrengthPolicy';
import {AuthenticationStrengthPolicyCollectionResponse} from './authenticationStrengthPolicyCollectionResponse';
import {serializeAuthenticationStrengthPolicy} from './serializeAuthenticationStrengthPolicy';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationStrengthPolicyCollectionResponse(authenticationStrengthPolicyCollectionResponse: AuthenticationStrengthPolicyCollectionResponse | undefined = {} as AuthenticationStrengthPolicyCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authenticationStrengthPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<AuthenticationStrengthPolicy>("value", authenticationStrengthPolicyCollectionResponse.value, serializeAuthenticationStrengthPolicy);
}
