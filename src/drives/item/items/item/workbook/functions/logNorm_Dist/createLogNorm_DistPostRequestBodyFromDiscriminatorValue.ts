import {deserializeIntoLogNorm_DistPostRequestBody} from './deserializeIntoLogNorm_DistPostRequestBody';
import {LogNorm_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLogNorm_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLogNorm_DistPostRequestBody;
}
