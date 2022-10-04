import {Windows10MobileCompliancePolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10MobileCompliancePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10MobileCompliancePolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10MobileCompliancePolicyCollectionResponse();
}
