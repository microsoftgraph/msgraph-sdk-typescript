import {OptionalClaimsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOptionalClaimsFromDiscriminatorValue(parseNode: ParseNode | undefined) : OptionalClaimsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OptionalClaimsImpl();
}
