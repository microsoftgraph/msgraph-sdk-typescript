import { type IdentityProviderBase } from './identityProviderBase';
import { type IdentityProviderBaseCollectionResponse } from './identityProviderBaseCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeIdentityProviderBase } from './serializeIdentityProviderBase';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIdentityProviderBaseCollectionResponse(writer: SerializationWriter, identityProviderBaseCollectionResponse: IdentityProviderBaseCollectionResponse | undefined = {} as IdentityProviderBaseCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityProviderBaseCollectionResponse)
        writer.writeCollectionOfObjectValues<IdentityProviderBase>("value", identityProviderBaseCollectionResponse.value, serializeIdentityProviderBase);
}
