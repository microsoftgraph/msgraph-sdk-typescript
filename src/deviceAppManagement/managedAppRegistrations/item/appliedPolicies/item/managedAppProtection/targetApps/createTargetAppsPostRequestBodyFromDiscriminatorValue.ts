import {TargetAppsPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTargetAppsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TargetAppsPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TargetAppsPostRequestBodyImpl();
}
