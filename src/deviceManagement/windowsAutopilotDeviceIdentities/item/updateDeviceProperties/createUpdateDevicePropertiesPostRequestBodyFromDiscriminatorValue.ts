import {UpdateDevicePropertiesPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateDevicePropertiesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateDevicePropertiesPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateDevicePropertiesPostRequestBodyImpl();
}
