import {deserializeIntoWindows10EnterpriseModernAppManagementConfiguration} from './deserializeIntoWindows10EnterpriseModernAppManagementConfiguration';
import {Windows10EnterpriseModernAppManagementConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10EnterpriseModernAppManagementConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindows10EnterpriseModernAppManagementConfiguration;
}
