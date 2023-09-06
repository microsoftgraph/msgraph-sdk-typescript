import { type AttributeMappingFunctionSchema } from './attributeMappingFunctionSchema';
import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AttributeMappingFunctionSchemaCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AttributeMappingFunctionSchema[] | undefined;
}
