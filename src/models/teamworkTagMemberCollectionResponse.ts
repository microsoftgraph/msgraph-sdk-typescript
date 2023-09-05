import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type TeamworkTagMember } from './teamworkTagMember';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TeamworkTagMemberCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TeamworkTagMember[] | undefined;
}
