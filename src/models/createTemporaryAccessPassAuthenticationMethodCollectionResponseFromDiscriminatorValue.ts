import {deserializeIntoTemporaryAccessPassAuthenticationMethodCollectionResponse} from './deserializeIntoTemporaryAccessPassAuthenticationMethodCollectionResponse';
import {TemporaryAccessPassAuthenticationMethodCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTemporaryAccessPassAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTemporaryAccessPassAuthenticationMethodCollectionResponse;
}
