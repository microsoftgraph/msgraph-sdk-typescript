import {deserializeIntoAttributeMappingFunctionSchemaCollectionResponse} from './deserializeIntoAttributeMappingFunctionSchemaCollectionResponse';
import {AttributeMappingFunctionSchemaCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttributeMappingFunctionSchemaCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttributeMappingFunctionSchemaCollectionResponse;
}
