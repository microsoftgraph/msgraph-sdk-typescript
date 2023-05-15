import {createIdentityProviderFromDiscriminatorValue} from './createIdentityProviderFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {IdentityProvider} from './identityProvider';
import {IdentityProviderCollectionResponse} from './identityProviderCollectionResponse';
import {serializeIdentityProvider} from './serializeIdentityProvider';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityProviderCollectionResponse(identityProviderCollectionResponse: IdentityProviderCollectionResponse | undefined = {} as IdentityProviderCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identityProviderCollectionResponse),
        "value": n => { identityProviderCollectionResponse.value = n.getCollectionOfObjectValues<IdentityProvider>(createIdentityProviderFromDiscriminatorValue); },
    }
}
