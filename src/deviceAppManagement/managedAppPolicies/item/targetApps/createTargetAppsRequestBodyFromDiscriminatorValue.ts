import {TargetAppsRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetAppsRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetAppsRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetAppsRequestBodyImpl();
}
