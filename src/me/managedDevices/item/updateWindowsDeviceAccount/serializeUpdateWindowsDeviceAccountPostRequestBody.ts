import { serializeUpdateWindowsDeviceAccountActionParameter } from '../../../../models/serializeUpdateWindowsDeviceAccountActionParameter';
import { type UpdateWindowsDeviceAccountActionParameter } from '../../../../models/updateWindowsDeviceAccountActionParameter';
import { type UpdateWindowsDeviceAccountPostRequestBody } from './updateWindowsDeviceAccountPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUpdateWindowsDeviceAccountPostRequestBody(writer: SerializationWriter, updateWindowsDeviceAccountPostRequestBody: UpdateWindowsDeviceAccountPostRequestBody | undefined = {} as UpdateWindowsDeviceAccountPostRequestBody) : void {
        writer.writeObjectValue<UpdateWindowsDeviceAccountActionParameter>("updateWindowsDeviceAccountActionParameter", updateWindowsDeviceAccountPostRequestBody.updateWindowsDeviceAccountActionParameter, serializeUpdateWindowsDeviceAccountActionParameter);
        writer.writeAdditionalData(updateWindowsDeviceAccountPostRequestBody.additionalData);
}
