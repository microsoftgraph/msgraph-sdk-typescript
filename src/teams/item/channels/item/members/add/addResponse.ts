import {ActionResultPart} from '../../../../../../models/actionResultPart';
import {BaseCollectionPaginationCountResponse} from '../../../../../../models/baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AddResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ActionResultPart[] | undefined;
}
