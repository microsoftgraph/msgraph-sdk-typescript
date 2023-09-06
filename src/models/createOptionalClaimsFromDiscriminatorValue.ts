import { deserializeIntoOptionalClaims } from './deserializeIntoOptionalClaims';
import { type OptionalClaims } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOptionalClaimsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOptionalClaims;
}
