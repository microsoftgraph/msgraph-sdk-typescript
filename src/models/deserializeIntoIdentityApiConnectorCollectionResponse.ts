import { createIdentityApiConnectorFromDiscriminatorValue } from './createIdentityApiConnectorFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type IdentityApiConnector } from './identityApiConnector';
import { type IdentityApiConnectorCollectionResponse } from './identityApiConnectorCollectionResponse';
import { serializeIdentityApiConnector } from './serializeIdentityApiConnector';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityApiConnectorCollectionResponse(identityApiConnectorCollectionResponse: IdentityApiConnectorCollectionResponse | undefined = {} as IdentityApiConnectorCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identityApiConnectorCollectionResponse),
        "value": n => { identityApiConnectorCollectionResponse.value = n.getCollectionOfObjectValues<IdentityApiConnector>(createIdentityApiConnectorFromDiscriminatorValue); },
    }
}
