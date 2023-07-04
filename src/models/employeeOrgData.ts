import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EmployeeOrgData extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The cost center associated with the user. Returned only on $select. Supports $filter.
     */
    costCenter?: string | undefined;
    /**
     * The name of the division in which the user works. Returned only on $select. Supports $filter.
     */
    division?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
