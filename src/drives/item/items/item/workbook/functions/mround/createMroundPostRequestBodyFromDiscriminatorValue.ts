import {deserializeIntoMroundPostRequestBody} from './deserializeIntoMroundPostRequestBody';
import {MroundPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMroundPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMroundPostRequestBody;
}
