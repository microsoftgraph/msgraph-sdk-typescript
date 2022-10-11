import {AndroidCompliancePolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidCompliancePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidCompliancePolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidCompliancePolicyCollectionResponse();
}
