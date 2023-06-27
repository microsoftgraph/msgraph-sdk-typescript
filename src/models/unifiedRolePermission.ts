import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRolePermission extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Set of tasks that can be performed on a resource. Required.
     */
    allowedResourceActions?: string[] | undefined;
    /**
     * Optional constraints that must be met for the permission to be effective. Not supported for custom roles.
     */
    condition?: string | undefined;
    /**
     * Set of tasks that may not be performed on a resource. Not yet supported.
     */
    excludedResourceActions?: string[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
