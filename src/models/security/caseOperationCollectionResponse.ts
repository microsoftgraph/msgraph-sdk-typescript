import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {CaseOperation} from './caseOperation';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface CaseOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CaseOperation[] | undefined;
}
