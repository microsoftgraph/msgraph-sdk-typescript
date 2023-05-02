import {AuthenticationContextClassReference} from './authenticationContextClassReference';
import {AuthenticationContextClassReferenceCollectionResponse} from './authenticationContextClassReferenceCollectionResponse';
import {createAuthenticationContextClassReferenceFromDiscriminatorValue} from './createAuthenticationContextClassReferenceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAuthenticationContextClassReference} from './serializeAuthenticationContextClassReference';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationContextClassReferenceCollectionResponse(authenticationContextClassReferenceCollectionResponse: AuthenticationContextClassReferenceCollectionResponse | undefined = {} as AuthenticationContextClassReferenceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(authenticationContextClassReferenceCollectionResponse),
        "value": n => { authenticationContextClassReferenceCollectionResponse.value = n.getCollectionOfObjectValues<AuthenticationContextClassReference>(createAuthenticationContextClassReferenceFromDiscriminatorValue); },
    }
}
