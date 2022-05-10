import {TokenLifetimePolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTokenLifetimePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TokenLifetimePolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TokenLifetimePolicyImpl();
}
