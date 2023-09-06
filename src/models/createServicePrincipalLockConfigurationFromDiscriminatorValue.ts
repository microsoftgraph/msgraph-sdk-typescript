import { deserializeIntoServicePrincipalLockConfiguration } from './deserializeIntoServicePrincipalLockConfiguration';
import { type ServicePrincipalLockConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServicePrincipalLockConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServicePrincipalLockConfiguration;
}
