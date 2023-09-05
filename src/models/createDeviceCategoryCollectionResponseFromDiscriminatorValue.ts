import { deserializeIntoDeviceCategoryCollectionResponse } from './deserializeIntoDeviceCategoryCollectionResponse';
import { type DeviceCategoryCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceCategoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceCategoryCollectionResponse;
}
