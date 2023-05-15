import {IdentityProvider} from './identityProvider';
import {IdentityProviderCollectionResponse} from './identityProviderCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentityProvider} from './serializeIdentityProvider';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityProviderCollectionResponse(writer: SerializationWriter, identityProviderCollectionResponse: IdentityProviderCollectionResponse | undefined = {} as IdentityProviderCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityProviderCollectionResponse)
        writer.writeCollectionOfObjectValues<IdentityProvider>("value", identityProviderCollectionResponse.value, serializeIdentityProvider);
}
