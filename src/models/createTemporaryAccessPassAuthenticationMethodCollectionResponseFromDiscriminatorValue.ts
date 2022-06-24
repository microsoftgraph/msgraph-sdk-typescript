import {TemporaryAccessPassAuthenticationMethodCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTemporaryAccessPassAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TemporaryAccessPassAuthenticationMethodCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TemporaryAccessPassAuthenticationMethodCollectionResponseImpl();
}
