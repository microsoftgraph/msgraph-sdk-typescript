import {serializeUpdateWindowsDeviceAccountActionParameter} from '../../../../models/serializeUpdateWindowsDeviceAccountActionParameter';
import {UpdateWindowsDeviceAccountActionParameter} from '../../../../models/updateWindowsDeviceAccountActionParameter';
import {UpdateWindowsDeviceAccountPostRequestBody} from './updateWindowsDeviceAccountPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUpdateWindowsDeviceAccountPostRequestBody(writer: SerializationWriter, updateWindowsDeviceAccountPostRequestBody: UpdateWindowsDeviceAccountPostRequestBody | undefined = {} as UpdateWindowsDeviceAccountPostRequestBody) : void {
        writer.writeObjectValue<UpdateWindowsDeviceAccountActionParameter>("updateWindowsDeviceAccountActionParameter", updateWindowsDeviceAccountPostRequestBody.updateWindowsDeviceAccountActionParameter, serializeUpdateWindowsDeviceAccountActionParameter);
        writer.writeAdditionalData(updateWindowsDeviceAccountPostRequestBody.additionalData);
}
