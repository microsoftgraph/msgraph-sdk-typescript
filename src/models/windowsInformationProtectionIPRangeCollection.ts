import {IpRange} from './ipRange';

export interface WindowsInformationProtectionIPRangeCollection{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Display name */
    displayName?:string | undefined;
    /** Collection of ip ranges */
    ranges?:IpRange[] | undefined;
}
