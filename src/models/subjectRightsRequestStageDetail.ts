import {PublicError} from './publicError';
import {SubjectRightsRequestStage} from './subjectRightsRequestStage';
import {SubjectRightsRequestStageStatus} from './subjectRightsRequestStageStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SubjectRightsRequestStageDetail extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Describes the error, if any, for the current stage.
     */
    errorEscaped?: PublicError | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The stage of the subject rights request. Possible values are: contentRetrieval, contentReview, generateReport, contentDeletion, caseResolved, unknownFutureValue.
     */
    stage?: SubjectRightsRequestStage | undefined;
    /**
     * Status of the current stage. Possible values are: notStarted, current, completed, failed, unknownFutureValue.
     */
    status?: SubjectRightsRequestStageStatus | undefined;
}
