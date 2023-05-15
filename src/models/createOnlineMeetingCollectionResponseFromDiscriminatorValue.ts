import {deserializeIntoOnlineMeetingCollectionResponse} from './deserializeIntoOnlineMeetingCollectionResponse';
import {OnlineMeetingCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnlineMeetingCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnlineMeetingCollectionResponse;
}
