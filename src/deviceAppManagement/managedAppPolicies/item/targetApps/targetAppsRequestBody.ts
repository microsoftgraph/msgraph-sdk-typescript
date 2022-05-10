import {ManagedMobileApp} from '../../../../models/managedMobileApp';

export interface TargetAppsRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The apps property  */
    apps?: ManagedMobileApp[] | undefined;
}
