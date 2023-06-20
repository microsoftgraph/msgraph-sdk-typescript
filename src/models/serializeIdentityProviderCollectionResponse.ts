import {IdentityProvider} from './identityProvider';
import {IdentityProviderCollectionResponse} from './identityProviderCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentityProvider} from './serializeIdentityProvider';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityProviderCollectionResponse(identityProviderCollectionResponse: IdentityProviderCollectionResponse | undefined = {} as IdentityProviderCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityProviderCollectionResponse)
        writer.writeCollectionOfObjectValues<IdentityProvider>("value", identityProviderCollectionResponse.value, serializeIdentityProvider);
}
