import {deserializeIntoGeolocationColumn} from './deserializeIntoGeolocationColumn';
import {GeolocationColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGeolocationColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGeolocationColumn;
}
