import {RecommendedAction} from './recommendedAction';
import {SimulationEventsContent} from './simulationEventsContent';
import {TrainingEventsContent} from './trainingEventsContent';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SimulationReportOverview extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * List of recommended actions for a tenant to improve its security posture based on the attack simulation and training campaign attack type.
     */
    recommendedActions?: RecommendedAction[] | undefined;
    /**
     * Number of valid users in the attack simulation and training campaign.
     */
    resolvedTargetsCount?: number | undefined;
    /**
     * Summary of simulation events in the attack simulation and training campaign.
     */
    simulationEventsContent?: SimulationEventsContent | undefined;
    /**
     * Summary of assigned trainings in the attack simulation and training campaign.
     */
    trainingEventsContent?: TrainingEventsContent | undefined;
}
