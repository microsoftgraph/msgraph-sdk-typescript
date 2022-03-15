import {TargetAppsRequestBody} from './targetAppsRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetAppsRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetAppsRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetAppsRequestBody();
}
