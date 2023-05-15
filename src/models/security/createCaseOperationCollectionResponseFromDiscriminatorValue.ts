import {deserializeIntoCaseOperationCollectionResponse} from './deserializeIntoCaseOperationCollectionResponse';
import {CaseOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCaseOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCaseOperationCollectionResponse;
}
