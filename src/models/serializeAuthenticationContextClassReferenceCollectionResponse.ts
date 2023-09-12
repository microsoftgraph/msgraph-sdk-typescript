import { type AuthenticationContextClassReference } from './authenticationContextClassReference';
import { type AuthenticationContextClassReferenceCollectionResponse } from './authenticationContextClassReferenceCollectionResponse';
import { serializeAuthenticationContextClassReference } from './serializeAuthenticationContextClassReference';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAuthenticationContextClassReferenceCollectionResponse(writer: SerializationWriter, authenticationContextClassReferenceCollectionResponse: AuthenticationContextClassReferenceCollectionResponse | undefined = {} as AuthenticationContextClassReferenceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authenticationContextClassReferenceCollectionResponse)
        writer.writeCollectionOfObjectValues<AuthenticationContextClassReference>("value", authenticationContextClassReferenceCollectionResponse.value, serializeAuthenticationContextClassReference);
}
