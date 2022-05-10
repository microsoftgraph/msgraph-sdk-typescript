import {TokenIssuancePolicyCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTokenIssuancePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TokenIssuancePolicyCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TokenIssuancePolicyCollectionResponseImpl();
}
