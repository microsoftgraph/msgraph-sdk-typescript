import {LogNorm_InvPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLogNorm_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : LogNorm_InvPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LogNorm_InvPostRequestBody();
}
