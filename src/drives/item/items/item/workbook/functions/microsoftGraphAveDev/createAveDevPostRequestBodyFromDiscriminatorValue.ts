import {AveDevPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAveDevPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AveDevPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AveDevPostRequestBody();
}
