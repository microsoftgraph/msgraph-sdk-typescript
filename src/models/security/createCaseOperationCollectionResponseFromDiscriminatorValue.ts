import {CaseOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCaseOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CaseOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CaseOperationCollectionResponse();
}