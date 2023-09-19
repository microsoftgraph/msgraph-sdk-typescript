import { deserializeIntoIosVppAppCollectionResponse } from './deserializeIntoIosVppAppCollectionResponse';
import { type IosVppAppCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosVppAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosVppAppCollectionResponse;
}
