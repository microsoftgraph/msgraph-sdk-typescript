import {deserializeIntoAttributeMappingParameterSchema} from './deserializeIntoAttributeMappingParameterSchema';
import {AttributeMappingParameterSchema} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttributeMappingParameterSchemaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttributeMappingParameterSchema;
}
