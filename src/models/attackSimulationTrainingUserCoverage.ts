import type {AttackSimulationUser} from './attackSimulationUser';
import type {UserTrainingStatusInfo} from './userTrainingStatusInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttackSimulationTrainingUserCoverage extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * User in an attack simulation and training campaign.
     */
    attackSimulationUser?: AttackSimulationUser | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * List of assigned trainings and their statuses for the user.
     */
    userTrainings?: UserTrainingStatusInfo[] | undefined;
}
