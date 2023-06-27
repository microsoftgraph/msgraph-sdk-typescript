import {SimulationEvent} from './simulationEvent';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SimulationEventsContent extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Actual percentage of users who fell for the simulated attack in an attack simulation and training campaign.
     */
    compromisedRate?: number | undefined;
    /**
     * List of simulation events in an attack simulation and training campaign.
     */
    events?: SimulationEvent[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
