import {StDev_PPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStDev_PPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : StDev_PPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StDev_PPostRequestBody();
}
