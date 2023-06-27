import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TeamworkTagMember} from './teamworkTagMember';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkTagMemberCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TeamworkTagMember[] | undefined;
}
