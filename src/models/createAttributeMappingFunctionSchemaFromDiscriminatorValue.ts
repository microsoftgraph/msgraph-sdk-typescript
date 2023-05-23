import {deserializeIntoAttributeMappingFunctionSchema} from './deserializeIntoAttributeMappingFunctionSchema';
import {AttributeMappingFunctionSchema} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttributeMappingFunctionSchemaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttributeMappingFunctionSchema;
}
