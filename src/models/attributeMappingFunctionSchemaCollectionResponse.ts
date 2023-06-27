import {AttributeMappingFunctionSchema} from './attributeMappingFunctionSchema';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AttributeMappingFunctionSchemaCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AttributeMappingFunctionSchema[] | undefined;
}
