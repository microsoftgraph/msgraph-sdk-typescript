import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {SubjectRightsRequest} from './subjectRightsRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SubjectRightsRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: SubjectRightsRequest[] | undefined;
}
