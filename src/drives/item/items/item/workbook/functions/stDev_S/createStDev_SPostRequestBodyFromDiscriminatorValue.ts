import {deserializeIntoStDev_SPostRequestBody} from './deserializeIntoStDev_SPostRequestBody';
import {StDev_SPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStDev_SPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStDev_SPostRequestBody;
}
