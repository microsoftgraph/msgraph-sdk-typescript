import {deserializeIntoUpdateDevicePropertiesPostRequestBody} from './deserializeIntoUpdateDevicePropertiesPostRequestBody';
import {UpdateDevicePropertiesPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateDevicePropertiesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUpdateDevicePropertiesPostRequestBody;
}
