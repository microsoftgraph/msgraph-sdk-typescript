import { deserializeIntoAlternativeSecurityId } from './deserializeIntoAlternativeSecurityId';
import { type AlternativeSecurityId } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAlternativeSecurityIdFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAlternativeSecurityId;
}
