import type {IdentityProvider} from './identityProvider';
import type {IdentityProviderCollectionResponse} from './identityProviderCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentityProvider} from './serializeIdentityProvider';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityProviderCollectionResponse(writer: SerializationWriter, identityProviderCollectionResponse: IdentityProviderCollectionResponse | undefined = {} as IdentityProviderCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityProviderCollectionResponse)
        writer.writeCollectionOfObjectValues<IdentityProvider>("value", identityProviderCollectionResponse.value, serializeIdentityProvider);
}
