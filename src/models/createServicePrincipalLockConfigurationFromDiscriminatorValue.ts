import {deserializeIntoServicePrincipalLockConfiguration} from './deserializeIntoServicePrincipalLockConfiguration';
import {ServicePrincipalLockConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServicePrincipalLockConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServicePrincipalLockConfiguration;
}
