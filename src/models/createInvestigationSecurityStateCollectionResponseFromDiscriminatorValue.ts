import {InvestigationSecurityStateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInvestigationSecurityStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : InvestigationSecurityStateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InvestigationSecurityStateCollectionResponse();
}
