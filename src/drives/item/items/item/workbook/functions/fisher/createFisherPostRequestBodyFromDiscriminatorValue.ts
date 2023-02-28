import {FisherPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFisherPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : FisherPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FisherPostRequestBody();
}
