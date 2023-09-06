import { deserializeIntoExternalConnection } from './deserializeIntoExternalConnection';
import { type ExternalConnection } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExternalConnectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalConnection;
}
