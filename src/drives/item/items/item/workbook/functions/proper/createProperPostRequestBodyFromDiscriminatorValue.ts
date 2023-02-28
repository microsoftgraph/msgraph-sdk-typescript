import {ProperPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProperPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProperPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProperPostRequestBody();
}
