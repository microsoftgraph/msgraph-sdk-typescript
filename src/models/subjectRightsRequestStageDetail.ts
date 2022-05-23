import {PublicError} from './publicError';
import {SubjectRightsRequestStage} from './subjectRightsRequestStage';
import {SubjectRightsRequestStageStatus} from './subjectRightsRequestStageStatus';

export interface SubjectRightsRequestStageDetail{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Describes the error, if any, for the current stage. */
    error_escaped?:PublicError | undefined;
    /** The stage of the subject rights request. Possible values are: contentRetrieval, contentReview, generateReport, contentDeletion, caseResolved, unknownFutureValue. */
    stage?:SubjectRightsRequestStage | undefined;
    /** Status of the current stage. Possible values are: notStarted, current, completed, failed, unknownFutureValue. */
    status?:SubjectRightsRequestStageStatus | undefined;
}
