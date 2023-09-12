import { deserializeIntoOptionalClaim } from './deserializeIntoOptionalClaim';
import { type OptionalClaim } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOptionalClaimFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOptionalClaim;
}
