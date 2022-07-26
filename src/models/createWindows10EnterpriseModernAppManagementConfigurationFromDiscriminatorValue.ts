import {Windows10EnterpriseModernAppManagementConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10EnterpriseModernAppManagementConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10EnterpriseModernAppManagementConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10EnterpriseModernAppManagementConfiguration();
}
