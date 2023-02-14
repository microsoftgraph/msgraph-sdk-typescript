import {RriPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRriPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RriPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RriPostRequestBody();
}
