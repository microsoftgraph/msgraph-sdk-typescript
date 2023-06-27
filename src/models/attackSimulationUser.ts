import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttackSimulationUser extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Display name of the user.
     */
    displayName?: string | undefined;
    /**
     * Email address of the user.
     */
    email?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * This is the id property value of the user resource that represents the user in the Azure Active Directory tenant.
     */
    userId?: string | undefined;
}
