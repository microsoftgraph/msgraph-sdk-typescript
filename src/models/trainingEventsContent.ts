import {AssignedTrainingInfo} from './assignedTrainingInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TrainingEventsContent extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * List of assigned trainings and their information in an attack simulation and training campaign.
     */
    assignedTrainingsInfos?: AssignedTrainingInfo[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Number of users who were assigned trainings in an attack simulation and training campaign.
     */
    trainingsAssignedUserCount?: number | undefined;
}
