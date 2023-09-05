import { deserializeIntoTemporaryAccessPassAuthenticationMethodCollectionResponse } from './deserializeIntoTemporaryAccessPassAuthenticationMethodCollectionResponse';
import { type TemporaryAccessPassAuthenticationMethodCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTemporaryAccessPassAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTemporaryAccessPassAuthenticationMethodCollectionResponse;
}
