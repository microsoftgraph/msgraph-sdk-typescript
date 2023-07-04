import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PrintTaskDefinition} from './printTaskDefinition';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintTaskDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PrintTaskDefinition[] | undefined;
}
