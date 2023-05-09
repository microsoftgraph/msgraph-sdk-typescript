import {AuthenticationContextClassReference} from './authenticationContextClassReference';
import {AuthenticationContextClassReferenceCollectionResponse} from './authenticationContextClassReferenceCollectionResponse';
import {serializeAuthenticationContextClassReference} from './serializeAuthenticationContextClassReference';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationContextClassReferenceCollectionResponse(writer: SerializationWriter, authenticationContextClassReferenceCollectionResponse: AuthenticationContextClassReferenceCollectionResponse | undefined = {} as AuthenticationContextClassReferenceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, authenticationContextClassReferenceCollectionResponse)
        writer.writeCollectionOfObjectValues<AuthenticationContextClassReference>("value", authenticationContextClassReferenceCollectionResponse.value, serializeAuthenticationContextClassReference);
}
