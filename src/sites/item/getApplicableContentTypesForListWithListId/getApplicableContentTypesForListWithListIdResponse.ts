import { type BaseCollectionPaginationCountResponse } from '../../../models/baseCollectionPaginationCountResponse';
import { type ContentType } from '../../../models/contentType';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface GetApplicableContentTypesForListWithListIdResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ContentType[] | undefined;
}
