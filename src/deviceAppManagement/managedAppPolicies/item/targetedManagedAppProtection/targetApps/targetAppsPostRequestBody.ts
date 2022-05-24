import {ManagedMobileApp} from '../../../../../models/managedMobileApp';
import {TargetedManagedAppGroupType} from '../../../../../models/targetedManagedAppGroupType';

export interface TargetAppsPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The appGroupType property */
    appGroupType?:TargetedManagedAppGroupType | undefined;
    /** The apps property */
    apps?:ManagedMobileApp[] | undefined;
}
