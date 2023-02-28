import {DeltaPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeltaPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeltaPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeltaPostRequestBody();
}
