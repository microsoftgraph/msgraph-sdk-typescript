import {IdentityProviderBase} from './identityProviderBase';
import {IdentityProviderBaseCollectionResponse} from './identityProviderBaseCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityProviderBaseCollectionResponse(writer: SerializationWriter, identityProviderBaseCollectionResponse: IdentityProviderBaseCollectionResponse | undefined = {} as IdentityProviderBaseCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityProviderBaseCollectionResponse)
        writer.writeCollectionOfObjectValues<IdentityProviderBase>("value", identityProviderBaseCollectionResponse.value, serializeIdentityProviderBase);
}
