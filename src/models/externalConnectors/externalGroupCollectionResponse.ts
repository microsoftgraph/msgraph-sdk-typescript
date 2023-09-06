import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type ExternalGroup } from './externalGroup';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ExternalGroupCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ExternalGroup[] | undefined;
}
