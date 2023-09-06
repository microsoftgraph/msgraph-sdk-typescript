import { deserializeIntoAttributeMappingFunctionSchemaCollectionResponse } from './deserializeIntoAttributeMappingFunctionSchemaCollectionResponse';
import { type AttributeMappingFunctionSchemaCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttributeMappingFunctionSchemaCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttributeMappingFunctionSchemaCollectionResponse;
}
