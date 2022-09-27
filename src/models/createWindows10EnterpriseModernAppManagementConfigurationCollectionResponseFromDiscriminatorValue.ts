import {Windows10EnterpriseModernAppManagementConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10EnterpriseModernAppManagementConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10EnterpriseModernAppManagementConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10EnterpriseModernAppManagementConfigurationCollectionResponse();
}
