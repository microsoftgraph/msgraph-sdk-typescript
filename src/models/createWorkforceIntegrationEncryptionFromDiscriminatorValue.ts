import {WorkforceIntegrationEncryptionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkforceIntegrationEncryptionFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkforceIntegrationEncryptionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkforceIntegrationEncryptionImpl();
}
