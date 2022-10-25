import {MacOSCompliancePolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSCompliancePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSCompliancePolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSCompliancePolicyCollectionResponse();
}
