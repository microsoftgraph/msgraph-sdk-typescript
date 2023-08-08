import type {UpdateWindowsDeviceAccountActionParameter} from '../../../../../models/updateWindowsDeviceAccountActionParameter';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UpdateWindowsDeviceAccountPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The updateWindowsDeviceAccountActionParameter property
     */
    updateWindowsDeviceAccountActionParameter?: UpdateWindowsDeviceAccountActionParameter | undefined;
}
