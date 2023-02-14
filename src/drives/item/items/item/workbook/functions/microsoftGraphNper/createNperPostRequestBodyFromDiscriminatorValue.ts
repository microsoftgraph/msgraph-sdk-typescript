import {NperPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNperPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : NperPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NperPostRequestBody();
}
