import {MacOSGeneralDeviceConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSGeneralDeviceConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSGeneralDeviceConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSGeneralDeviceConfigurationCollectionResponse();
}
