import {AttributeMappingFunctionSchema} from '../../../../../../../models/attributeMappingFunctionSchema';
import {BaseCollectionPaginationCountResponse} from '../../../../../../../models/baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FunctionsResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: AttributeMappingFunctionSchema[] | undefined;
}
