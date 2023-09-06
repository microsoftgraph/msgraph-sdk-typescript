import { createIdentityProviderFromDiscriminatorValue } from './createIdentityProviderFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type IdentityProvider } from './identityProvider';
import { type IdentityProviderCollectionResponse } from './identityProviderCollectionResponse';
import { serializeIdentityProvider } from './serializeIdentityProvider';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityProviderCollectionResponse(identityProviderCollectionResponse: IdentityProviderCollectionResponse | undefined = {} as IdentityProviderCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identityProviderCollectionResponse),
        "value": n => { identityProviderCollectionResponse.value = n.getCollectionOfObjectValues<IdentityProvider>(createIdentityProviderFromDiscriminatorValue); },
    }
}
