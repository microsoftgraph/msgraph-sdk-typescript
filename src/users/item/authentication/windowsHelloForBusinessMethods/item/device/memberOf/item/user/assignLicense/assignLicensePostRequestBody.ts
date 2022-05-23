import {AssignedLicense} from '../../../../../../../../../../models/assignedLicense';

export interface AssignLicensePostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The addLicenses property */
    addLicenses?:AssignedLicense[] | undefined;
    /** The removeLicenses property */
    removeLicenses?:string[] | undefined;
}
