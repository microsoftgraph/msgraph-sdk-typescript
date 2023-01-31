import {PhiPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhiPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PhiPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PhiPostRequestBody();
}
