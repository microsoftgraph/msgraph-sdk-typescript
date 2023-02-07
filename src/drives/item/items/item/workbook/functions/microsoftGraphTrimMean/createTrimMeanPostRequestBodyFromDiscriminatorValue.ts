import {TrimMeanPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTrimMeanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TrimMeanPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TrimMeanPostRequestBody();
}
