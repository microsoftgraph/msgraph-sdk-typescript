import {WindowsPhone81CompliancePolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsPhone81CompliancePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsPhone81CompliancePolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsPhone81CompliancePolicyCollectionResponse();
}
