import {Windows10EnterpriseModernAppManagementConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10EnterpriseModernAppManagementConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10EnterpriseModernAppManagementConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10EnterpriseModernAppManagementConfigurationImpl();
}
