import {deserializeIntoCountIfsPostRequestBody} from './deserializeIntoCountIfsPostRequestBody';
import {CountIfsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCountIfsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCountIfsPostRequestBody;
}
