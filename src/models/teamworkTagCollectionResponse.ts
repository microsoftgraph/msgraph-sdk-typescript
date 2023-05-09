import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TeamworkTag} from './teamworkTag';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkTagCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: TeamworkTag[] | undefined;
}
