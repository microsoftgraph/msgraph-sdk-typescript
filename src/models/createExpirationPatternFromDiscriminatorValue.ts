import { deserializeIntoExpirationPattern } from './deserializeIntoExpirationPattern';
import { type ExpirationPattern } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExpirationPatternFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExpirationPattern;
}
