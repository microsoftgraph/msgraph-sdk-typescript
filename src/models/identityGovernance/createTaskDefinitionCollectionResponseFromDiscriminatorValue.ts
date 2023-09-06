import { deserializeIntoTaskDefinitionCollectionResponse } from './deserializeIntoTaskDefinitionCollectionResponse';
import { type TaskDefinitionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTaskDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTaskDefinitionCollectionResponse;
}
