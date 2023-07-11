import {Entity} from '../entity';
import {IdentitySet} from '../identitySet';
import {ResultInfo} from '../resultInfo';
import {CaseAction} from './caseAction';
import {CaseOperationStatus} from './caseOperationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CaseOperation extends Entity, Parsable {
    /**
     * The type of action the operation represents. Possible values are: addToReviewSet,applyTags,contentExport,convertToPdf,estimateStatistics, purgeData
     */
    action?: CaseAction | undefined;
    /**
     * The date and time the operation was completed.
     */
    completedDateTime?: Date | undefined;
    /**
     * The user that created the operation.
     */
    createdBy?: IdentitySet | undefined;
    /**
     * The date and time the operation was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * The progress of the operation.
     */
    percentProgress?: number | undefined;
    /**
     * Contains success and failure-specific result information.
     */
    resultInfo?: ResultInfo | undefined;
    /**
     * The status of the case operation. Possible values are: notStarted, submissionFailed, running, succeeded, partiallySucceeded, failed.
     */
    status?: CaseOperationStatus | undefined;
}
