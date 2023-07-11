import {deserializeIntoTaskDefinitionCollectionResponse} from './deserializeIntoTaskDefinitionCollectionResponse';
import {TaskDefinitionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTaskDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTaskDefinitionCollectionResponse;
}
