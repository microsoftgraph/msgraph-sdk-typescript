import {IosManagedAppProtectionCollectionResponse} from './iosManagedAppProtectionCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosManagedAppProtectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosManagedAppProtectionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosManagedAppProtectionCollectionResponse();
}
