import {UpdateAllowedCombinationsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateAllowedCombinationsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateAllowedCombinationsPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateAllowedCombinationsPostRequestBody();
}
