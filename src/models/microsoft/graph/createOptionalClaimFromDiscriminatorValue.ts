import {OptionalClaim} from './optionalClaim';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOptionalClaimFromDiscriminatorValue(parseNode: ParseNode | undefined) : OptionalClaim {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OptionalClaim();
}
