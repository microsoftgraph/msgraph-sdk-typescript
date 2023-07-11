import {IdentitySet} from './identitySet';
import {SubjectRightsRequestStage} from './subjectRightsRequestStage';
import {SubjectRightsRequestStageStatus} from './subjectRightsRequestStageStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SubjectRightsRequestHistory extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Identity of the user who changed the  subject rights request.
     */
    changedBy?: IdentitySet | undefined;
    /**
     * Data and time when the entity was changed.
     */
    eventDateTime?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The stage when the entity was changed. Possible values are: contentRetrieval, contentReview, generateReport, contentDeletion, caseResolved, unknownFutureValue.
     */
    stage?: SubjectRightsRequestStage | undefined;
    /**
     * The status of the stage when the entity was changed. Possible values are: notStarted, current, completed, failed, unknownFutureValue.
     */
    stageStatus?: SubjectRightsRequestStageStatus | undefined;
    /**
     * Type of history.
     */
    type?: string | undefined;
}
