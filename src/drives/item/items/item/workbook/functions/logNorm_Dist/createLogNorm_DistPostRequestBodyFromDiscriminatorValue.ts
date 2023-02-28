import {LogNorm_DistPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLogNorm_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : LogNorm_DistPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LogNorm_DistPostRequestBody();
}
