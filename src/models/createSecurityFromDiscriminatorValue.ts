import { deserializeIntoSecurity } from './deserializeIntoSecurity';
import { type Security } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSecurityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecurity;
}
