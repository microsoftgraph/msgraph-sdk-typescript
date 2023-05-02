import {deserializeIntoFisherPostRequestBody} from './deserializeIntoFisherPostRequestBody';
import {FisherPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFisherPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFisherPostRequestBody;
}
