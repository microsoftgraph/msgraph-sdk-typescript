import { type ResourceAction } from './resourceAction';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface RolePermission extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Resource Actions each containing a set of allowed and not allowed permissions.
     */
    resourceActions?: ResourceAction[] | undefined;
}
