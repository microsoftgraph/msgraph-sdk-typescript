import {deserializeIntoOptionalClaim} from './deserializeIntoOptionalClaim';
import {OptionalClaim} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOptionalClaimFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOptionalClaim;
}
