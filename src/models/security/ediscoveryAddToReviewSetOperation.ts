import {CaseOperation} from './caseOperation';
import {EdiscoveryReviewSet} from './ediscoveryReviewSet';
import {EdiscoverySearch} from './ediscoverySearch';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryAddToReviewSetOperation extends CaseOperation, Parsable {
    /**
     * eDiscovery review set to which items matching source collection query gets added.
     */
    reviewSet?: EdiscoveryReviewSet | undefined;
    /**
     * eDiscovery search that gets added to review set.
     */
    search?: EdiscoverySearch | undefined;
}
