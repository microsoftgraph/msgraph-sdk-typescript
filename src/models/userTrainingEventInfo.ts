import {TrainingStatus} from './trainingStatus';
import {UserTrainingContentEventInfo} from './userTrainingContentEventInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserTrainingEventInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Display name of the training.
     */
    displayName?: string | undefined;
    /**
     * Latest status of the training assigned to the user. Possible values are: unknown, assigned, inProgress, completed, overdue, unknownFutureValue.
     */
    latestTrainingStatus?: TrainingStatus | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Event details of the training when it was assigned to the user.
     */
    trainingAssignedProperties?: UserTrainingContentEventInfo | undefined;
    /**
     * Event details of the training when it was completed by the user.
     */
    trainingCompletedProperties?: UserTrainingContentEventInfo | undefined;
    /**
     * Event details of the training when it was updated/in-progress by the user.
     */
    trainingUpdatedProperties?: UserTrainingContentEventInfo | undefined;
}
