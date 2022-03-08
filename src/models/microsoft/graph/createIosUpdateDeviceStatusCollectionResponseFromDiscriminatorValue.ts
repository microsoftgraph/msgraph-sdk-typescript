import {IosUpdateDeviceStatusCollectionResponse} from './iosUpdateDeviceStatusCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosUpdateDeviceStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosUpdateDeviceStatusCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosUpdateDeviceStatusCollectionResponse();
}
