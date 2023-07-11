import {AttributeMappingParameterSchema} from './attributeMappingParameterSchema';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AttributeMappingFunctionSchema extends Entity, Parsable {
    /**
     * Collection of function parameters.
     */
    parameters?: AttributeMappingParameterSchema[] | undefined;
}
