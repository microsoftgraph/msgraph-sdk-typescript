import {SimulationReportOverview} from './simulationReportOverview';
import {UserSimulationDetails} from './userSimulationDetails';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SimulationReport extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Overview of an attack simulation and training campaign.
     */
    overview?: SimulationReportOverview | undefined;
    /**
     * The tenant users and their online actions in an attack simulation and training campaign.
     */
    simulationUsers?: UserSimulationDetails[] | undefined;
}
