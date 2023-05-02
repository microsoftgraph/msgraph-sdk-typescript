import {deserializeIntoCountResponse} from './deserializeIntoCountResponse';
import {CountResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCountResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCountResponse;
}
