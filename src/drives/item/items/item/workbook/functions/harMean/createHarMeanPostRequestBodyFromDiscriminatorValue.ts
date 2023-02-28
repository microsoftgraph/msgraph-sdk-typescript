import {HarMeanPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHarMeanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : HarMeanPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HarMeanPostRequestBody();
}
