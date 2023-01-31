import {FisherInvPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFisherInvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : FisherInvPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FisherInvPostRequestBody();
}
