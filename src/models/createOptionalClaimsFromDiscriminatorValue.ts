import {deserializeIntoOptionalClaims} from './deserializeIntoOptionalClaims';
import {OptionalClaims} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOptionalClaimsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOptionalClaims;
}
