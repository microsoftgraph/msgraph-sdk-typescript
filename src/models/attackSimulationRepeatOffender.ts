import type {AttackSimulationUser} from './attackSimulationUser';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttackSimulationRepeatOffender extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The user in an attack simulation and training campaign.
     */
    attackSimulationUser?: AttackSimulationUser | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Number of repeat offences of the user in attack simulation and training campaigns.
     */
    repeatOffenceCount?: number | undefined;
}
