import { deserializeIntoAttributeMappingParameterSchema } from './deserializeIntoAttributeMappingParameterSchema';
import { type AttributeMappingParameterSchema } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttributeMappingParameterSchemaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttributeMappingParameterSchema;
}
