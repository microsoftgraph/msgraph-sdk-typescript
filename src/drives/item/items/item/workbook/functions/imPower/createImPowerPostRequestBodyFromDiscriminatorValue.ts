import {deserializeIntoImPowerPostRequestBody} from './deserializeIntoImPowerPostRequestBody';
import {ImPowerPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImPowerPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImPowerPostRequestBody;
}
