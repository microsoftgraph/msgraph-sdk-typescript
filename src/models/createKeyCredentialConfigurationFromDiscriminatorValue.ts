import {deserializeIntoKeyCredentialConfiguration} from './deserializeIntoKeyCredentialConfiguration';
import {KeyCredentialConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKeyCredentialConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKeyCredentialConfiguration;
}
