import {CombinPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCombinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CombinPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CombinPostRequestBody();
}
