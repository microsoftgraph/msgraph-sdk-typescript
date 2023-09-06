import { createUpdateWindowsDeviceAccountActionParameterFromDiscriminatorValue } from '../../../../../models/createUpdateWindowsDeviceAccountActionParameterFromDiscriminatorValue';
import { serializeUpdateWindowsDeviceAccountActionParameter } from '../../../../../models/serializeUpdateWindowsDeviceAccountActionParameter';
import { type UpdateWindowsDeviceAccountActionParameter } from '../../../../../models/updateWindowsDeviceAccountActionParameter';
import { type UpdateWindowsDeviceAccountPostRequestBody } from './updateWindowsDeviceAccountPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUpdateWindowsDeviceAccountPostRequestBody(updateWindowsDeviceAccountPostRequestBody: UpdateWindowsDeviceAccountPostRequestBody | undefined = {} as UpdateWindowsDeviceAccountPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "updateWindowsDeviceAccountActionParameter": n => { updateWindowsDeviceAccountPostRequestBody.updateWindowsDeviceAccountActionParameter = n.getObjectValue<UpdateWindowsDeviceAccountActionParameter>(createUpdateWindowsDeviceAccountActionParameterFromDiscriminatorValue); },
    }
}
