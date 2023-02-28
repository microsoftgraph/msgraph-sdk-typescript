import {BahtTextPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBahtTextPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BahtTextPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BahtTextPostRequestBody();
}
