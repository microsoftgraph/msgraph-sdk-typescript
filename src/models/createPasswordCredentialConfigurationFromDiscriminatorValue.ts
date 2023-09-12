import { deserializeIntoPasswordCredentialConfiguration } from './deserializeIntoPasswordCredentialConfiguration';
import { type PasswordCredentialConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPasswordCredentialConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPasswordCredentialConfiguration;
}
