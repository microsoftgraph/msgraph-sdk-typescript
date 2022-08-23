import {TemporaryAccessPassAuthenticationMethodCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTemporaryAccessPassAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TemporaryAccessPassAuthenticationMethodCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TemporaryAccessPassAuthenticationMethodCollectionResponse();
}
