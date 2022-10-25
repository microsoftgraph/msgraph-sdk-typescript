import {Windows10CompliancePolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10CompliancePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10CompliancePolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10CompliancePolicyCollectionResponse();
}
