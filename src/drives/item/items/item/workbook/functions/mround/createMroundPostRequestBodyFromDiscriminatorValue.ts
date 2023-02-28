import {MroundPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMroundPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MroundPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MroundPostRequestBody();
}
