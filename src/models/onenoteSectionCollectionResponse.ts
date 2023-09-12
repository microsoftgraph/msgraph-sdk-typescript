import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type OnenoteSection } from './onenoteSection';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface OnenoteSectionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OnenoteSection[] | undefined;
}
