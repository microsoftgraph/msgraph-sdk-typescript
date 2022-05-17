import {ScreenSharingRole} from '../../../../models/screenSharingRole';

export interface ChangeScreenSharingRoleRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The role property */
    role?: ScreenSharingRole | undefined;
}
