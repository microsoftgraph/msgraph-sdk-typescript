import {IosGeneralDeviceConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosGeneralDeviceConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosGeneralDeviceConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosGeneralDeviceConfigurationCollectionResponse();
}
