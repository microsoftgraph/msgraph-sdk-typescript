import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {SectionGroup} from './sectionGroup';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SectionGroupCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: SectionGroup[] | undefined;
}
