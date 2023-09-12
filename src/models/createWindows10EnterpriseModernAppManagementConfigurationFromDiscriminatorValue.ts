import { deserializeIntoWindows10EnterpriseModernAppManagementConfiguration } from './deserializeIntoWindows10EnterpriseModernAppManagementConfiguration';
import { type Windows10EnterpriseModernAppManagementConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindows10EnterpriseModernAppManagementConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindows10EnterpriseModernAppManagementConfiguration;
}
