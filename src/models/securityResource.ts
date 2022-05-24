import {SecurityResourceType} from './securityResourceType';

export interface SecurityResource{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Name of the resource that is related to current alert. Required. */
    resource?:string | undefined;
    /** Represents type of security resources related to an alert. Possible values are: attacked, related. */
    resourceType?:SecurityResourceType | undefined;
}
