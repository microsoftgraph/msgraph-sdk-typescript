import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {SubjectRightsRequest} from './subjectRightsRequest';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface SubjectRightsRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SubjectRightsRequest[] | undefined;
}
