import { deserializeIntoFileSecurityState } from './deserializeIntoFileSecurityState';
import { type FileSecurityState } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFileSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFileSecurityState;
}
