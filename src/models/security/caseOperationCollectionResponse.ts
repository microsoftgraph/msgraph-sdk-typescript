import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {CaseOperation} from './caseOperation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CaseOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: CaseOperation[] | undefined;
}
