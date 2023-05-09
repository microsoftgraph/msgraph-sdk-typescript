import {deserializeIntoIdentityApiConnectorCollectionResponse} from './deserializeIntoIdentityApiConnectorCollectionResponse';
import {IdentityApiConnectorCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityApiConnectorCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityApiConnectorCollectionResponse;
}
