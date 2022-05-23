import {OptionalClaimImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOptionalClaimFromDiscriminatorValue(parseNode: ParseNode | undefined) : OptionalClaimImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OptionalClaimImpl();
}
