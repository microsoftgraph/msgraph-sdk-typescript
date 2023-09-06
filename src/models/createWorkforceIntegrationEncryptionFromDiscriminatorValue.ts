import { deserializeIntoWorkforceIntegrationEncryption } from './deserializeIntoWorkforceIntegrationEncryption';
import { type WorkforceIntegrationEncryption } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkforceIntegrationEncryptionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkforceIntegrationEncryption;
}
