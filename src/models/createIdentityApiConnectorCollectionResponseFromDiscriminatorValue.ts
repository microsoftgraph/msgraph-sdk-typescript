import { deserializeIntoIdentityApiConnectorCollectionResponse } from './deserializeIntoIdentityApiConnectorCollectionResponse';
import { type IdentityApiConnectorCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIdentityApiConnectorCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityApiConnectorCollectionResponse;
}
