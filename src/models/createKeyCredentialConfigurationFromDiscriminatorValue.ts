import { deserializeIntoKeyCredentialConfiguration } from './deserializeIntoKeyCredentialConfiguration';
import { type KeyCredentialConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createKeyCredentialConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKeyCredentialConfiguration;
}
