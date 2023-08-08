import type {RbacApplication} from './rbacApplication';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RoleManagement extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The directory property
     */
    directory?: RbacApplication | undefined;
    /**
     * Container for roles and assignments for entitlement management resources.
     */
    entitlementManagement?: RbacApplication | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
