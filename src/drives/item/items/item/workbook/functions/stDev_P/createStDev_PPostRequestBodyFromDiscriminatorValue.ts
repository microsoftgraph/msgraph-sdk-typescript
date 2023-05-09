import {deserializeIntoStDev_PPostRequestBody} from './deserializeIntoStDev_PPostRequestBody';
import {StDev_PPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStDev_PPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStDev_PPostRequestBody;
}
