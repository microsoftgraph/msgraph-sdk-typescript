import {createIdentityProviderBaseFromDiscriminatorValue} from './createIdentityProviderBaseFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {IdentityProviderBase} from './identityProviderBase';
import {IdentityProviderBaseCollectionResponse} from './identityProviderBaseCollectionResponse';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityProviderBaseCollectionResponse(identityProviderBaseCollectionResponse: IdentityProviderBaseCollectionResponse | undefined = {} as IdentityProviderBaseCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identityProviderBaseCollectionResponse),
        "value": n => { identityProviderBaseCollectionResponse.value = n.getCollectionOfObjectValues<IdentityProviderBase>(createIdentityProviderBaseFromDiscriminatorValue); },
    }
}
