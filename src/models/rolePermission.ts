import {ResourceAction} from './resourceAction';

export interface RolePermission{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Resource Actions each containing a set of allowed and not allowed permissions. */
    resourceActions?:ResourceAction[] | undefined;
}
