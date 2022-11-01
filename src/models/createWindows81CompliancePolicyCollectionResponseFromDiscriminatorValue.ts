import {Windows81CompliancePolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows81CompliancePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows81CompliancePolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows81CompliancePolicyCollectionResponse();
}
