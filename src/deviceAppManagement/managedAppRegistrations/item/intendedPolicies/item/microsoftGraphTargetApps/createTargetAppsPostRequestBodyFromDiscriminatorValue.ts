import {TargetAppsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetAppsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetAppsPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetAppsPostRequestBody();
}
