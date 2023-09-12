import { type AttributeMappingParameterSchema } from './attributeMappingParameterSchema';
import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AttributeMappingFunctionSchema extends Entity, Parsable {
    /**
     * Collection of function parameters.
     */
    parameters?: AttributeMappingParameterSchema[] | undefined;
}
