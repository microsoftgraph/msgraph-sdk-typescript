import {UpdateWindowsDeviceAccountActionParameter} from '../../../../models/updateWindowsDeviceAccountActionParameter';

export interface UpdateWindowsDeviceAccountPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The updateWindowsDeviceAccountActionParameter property */
    updateWindowsDeviceAccountActionParameter?:UpdateWindowsDeviceAccountActionParameter | undefined;
}
