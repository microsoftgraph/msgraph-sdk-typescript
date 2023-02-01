import {StDev_SPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStDev_SPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : StDev_SPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StDev_SPostRequestBody();
}
