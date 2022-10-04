import {ComplianceInformationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createComplianceInformationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ComplianceInformationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ComplianceInformationCollectionResponse();
}
