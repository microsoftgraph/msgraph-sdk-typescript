import { deserializeIntoTermsExpiration } from './deserializeIntoTermsExpiration';
import { type TermsExpiration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTermsExpirationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTermsExpiration;
}
