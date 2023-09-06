import { deserializeIntoAccessPackageQuestionCollectionResponse } from './deserializeIntoAccessPackageQuestionCollectionResponse';
import { type AccessPackageQuestionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageQuestionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageQuestionCollectionResponse;
}
