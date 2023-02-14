import {AccessPackageQuestionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageQuestionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageQuestionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageQuestionCollectionResponse();
}
