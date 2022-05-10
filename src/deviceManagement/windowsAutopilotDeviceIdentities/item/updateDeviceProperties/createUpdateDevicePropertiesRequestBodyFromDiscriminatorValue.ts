import {UpdateDevicePropertiesRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateDevicePropertiesRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateDevicePropertiesRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateDevicePropertiesRequestBodyImpl();
}
