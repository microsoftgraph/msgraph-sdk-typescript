import {deserializeIntoRemoveResponse} from './deserializeIntoRemoveResponse';
import {RemoveResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemoveResponse;
}
