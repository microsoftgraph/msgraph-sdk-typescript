import {AttackSimulationUser} from './attackSimulationUser';
import {UserSimulationEventInfo} from './userSimulationEventInfo';
import {UserTrainingEventInfo} from './userTrainingEventInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserSimulationDetails extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Number of trainings assigned to a user in an attack simulation and training campaign.
     */
    assignedTrainingsCount?: number | undefined;
    /**
     * Number of trainings completed by a user in an attack simulation and training campaign.
     */
    completedTrainingsCount?: number | undefined;
    /**
     * Date and time of the compromising online action by a user in an attack simulation and training campaign.
     */
    compromisedDateTime?: Date | undefined;
    /**
     * Number of trainings in progress by a user in an attack simulation and training campaign.
     */
    inProgressTrainingsCount?: number | undefined;
    /**
     * Indicates whether a user was compromised in an attack simulation and training campaign.
     */
    isCompromised?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Date and time when a user reported the delivered payload as phishing in the attack simulation and training campaign.
     */
    reportedPhishDateTime?: Date | undefined;
    /**
     * List of simulation events of a user in the attack simulation and training campaign.
     */
    simulationEvents?: UserSimulationEventInfo[] | undefined;
    /**
     * User in an attack simulation and training campaign.
     */
    simulationUser?: AttackSimulationUser | undefined;
    /**
     * List of training events of a user in the attack simulation and training campaign.
     */
    trainingEvents?: UserTrainingEventInfo[] | undefined;
}
