import { createIdentityProviderBaseFromDiscriminatorValue } from './createIdentityProviderBaseFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type IdentityProviderBase } from './identityProviderBase';
import { type IdentityProviderBaseCollectionResponse } from './identityProviderBaseCollectionResponse';
import { serializeIdentityProviderBase } from './serializeIdentityProviderBase';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityProviderBaseCollectionResponse(identityProviderBaseCollectionResponse: IdentityProviderBaseCollectionResponse | undefined = {} as IdentityProviderBaseCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identityProviderBaseCollectionResponse),
        "value": n => { identityProviderBaseCollectionResponse.value = n.getCollectionOfObjectValues<IdentityProviderBase>(createIdentityProviderBaseFromDiscriminatorValue); },
    }
}
