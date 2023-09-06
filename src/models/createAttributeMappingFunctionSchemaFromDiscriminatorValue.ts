import { deserializeIntoAttributeMappingFunctionSchema } from './deserializeIntoAttributeMappingFunctionSchema';
import { type AttributeMappingFunctionSchema } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttributeMappingFunctionSchemaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttributeMappingFunctionSchema;
}
