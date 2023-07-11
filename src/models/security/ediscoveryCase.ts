import {IdentitySet} from '../identitySet';
import {CaseEscaped} from './caseEscaped';
import {CaseOperation} from './caseOperation';
import {EdiscoveryCaseSettings} from './ediscoveryCaseSettings';
import {EdiscoveryCustodian} from './ediscoveryCustodian';
import {EdiscoveryNoncustodialDataSource} from './ediscoveryNoncustodialDataSource';
import {EdiscoveryReviewSet} from './ediscoveryReviewSet';
import {EdiscoveryReviewTag} from './ediscoveryReviewTag';
import {EdiscoverySearch} from './ediscoverySearch';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryCase extends CaseEscaped, Parsable {
    /**
     * The user who closed the case.
     */
    closedBy?: IdentitySet | undefined;
    /**
     * The date and time when the case was closed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    closedDateTime?: Date | undefined;
    /**
     * Returns a list of case ediscoveryCustodian objects for this case.
     */
    custodians?: EdiscoveryCustodian[] | undefined;
    /**
     * The external case number for customer reference.
     */
    externalId?: string | undefined;
    /**
     * Returns a list of case ediscoveryNoncustodialDataSource objects for this case.
     */
    noncustodialDataSources?: EdiscoveryNoncustodialDataSource[] | undefined;
    /**
     * Returns a list of case caseOperation objects for this case.
     */
    operations?: CaseOperation[] | undefined;
    /**
     * Returns a list of eDiscoveryReviewSet objects in the case.
     */
    reviewSets?: EdiscoveryReviewSet[] | undefined;
    /**
     * Returns a list of eDiscoverySearch objects associated with this case.
     */
    searches?: EdiscoverySearch[] | undefined;
    /**
     * Returns a list of eDIscoverySettings objects in the case.
     */
    settings?: EdiscoveryCaseSettings | undefined;
    /**
     * Returns a list of ediscoveryReviewTag objects associated to this case.
     */
    tags?: EdiscoveryReviewTag[] | undefined;
}
