import {RbacApplication} from './rbacApplication';

export interface RoleManagement{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Read-only. Nullable. */
    directory?:RbacApplication | undefined;
    /** Container for roles and assignments for entitlement management resources. */
    entitlementManagement?:RbacApplication | undefined;
}
