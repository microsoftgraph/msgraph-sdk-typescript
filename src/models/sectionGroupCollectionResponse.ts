import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type SectionGroup } from './sectionGroup';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SectionGroupCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SectionGroup[] | undefined;
}
