import {TokenLifetimePolicyCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTokenLifetimePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TokenLifetimePolicyCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TokenLifetimePolicyCollectionResponseImpl();
}
