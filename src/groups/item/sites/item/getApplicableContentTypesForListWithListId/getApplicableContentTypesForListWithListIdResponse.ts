import {BaseCollectionPaginationCountResponse} from '../../../../../models/baseCollectionPaginationCountResponse';
import {ContentType} from '../../../../../models/contentType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetApplicableContentTypesForListWithListIdResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ContentType[] | undefined;
}
