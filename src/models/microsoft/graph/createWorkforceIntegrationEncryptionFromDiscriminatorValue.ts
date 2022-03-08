import {WorkforceIntegrationEncryption} from './workforceIntegrationEncryption';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkforceIntegrationEncryptionFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkforceIntegrationEncryption {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkforceIntegrationEncryption();
}
