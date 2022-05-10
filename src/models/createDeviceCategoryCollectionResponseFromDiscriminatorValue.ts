import {DeviceCategoryCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCategoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCategoryCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCategoryCollectionResponseImpl();
}
