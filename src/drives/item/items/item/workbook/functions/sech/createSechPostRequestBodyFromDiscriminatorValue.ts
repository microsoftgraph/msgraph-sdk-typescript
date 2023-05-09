import {deserializeIntoSechPostRequestBody} from './deserializeIntoSechPostRequestBody';
import {SechPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSechPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSechPostRequestBody;
}
