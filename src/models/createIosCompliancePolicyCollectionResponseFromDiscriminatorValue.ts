import {IosCompliancePolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosCompliancePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosCompliancePolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosCompliancePolicyCollectionResponse();
}
