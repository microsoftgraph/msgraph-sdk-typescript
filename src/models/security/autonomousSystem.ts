import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AutonomousSystem extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The name of the autonomous system.
     */
    name?: string | undefined;
    /**
     * The autonomous system number, assigned by IANA.
     */
    number?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The name of the autonomous system organization.
     */
    organization?: string | undefined;
    /**
     * A displayable value for these autonomous system details.
     */
    value?: string | undefined;
}
