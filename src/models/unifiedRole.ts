import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRole extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The unified role definition ID of the directory role. Refer to unifiedRoleDefinition resource.
     */
    roleDefinitionId?: string | undefined;
}
