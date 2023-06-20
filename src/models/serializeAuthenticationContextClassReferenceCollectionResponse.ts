import {AuthenticationContextClassReference} from './authenticationContextClassReference';
import {AuthenticationContextClassReferenceCollectionResponse} from './authenticationContextClassReferenceCollectionResponse';
import {serializeAuthenticationContextClassReference} from './serializeAuthenticationContextClassReference';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationContextClassReferenceCollectionResponse(authenticationContextClassReferenceCollectionResponse: AuthenticationContextClassReferenceCollectionResponse | undefined = {} as AuthenticationContextClassReferenceCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authenticationContextClassReferenceCollectionResponse)
        writer.writeCollectionOfObjectValues<AuthenticationContextClassReference>("value", authenticationContextClassReferenceCollectionResponse.value, serializeAuthenticationContextClassReference);
}
