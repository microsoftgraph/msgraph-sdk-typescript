import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {ExternalGroup} from './externalGroup';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalGroupCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ExternalGroup[] | undefined;
}
