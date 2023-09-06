import { type CaseOperation } from './caseOperation';
import { type EdiscoveryReviewSet } from './ediscoveryReviewSet';
import { type EdiscoverySearch } from './ediscoverySearch';
import { type Parsable } from '@microsoft/kiota-abstractions';

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
