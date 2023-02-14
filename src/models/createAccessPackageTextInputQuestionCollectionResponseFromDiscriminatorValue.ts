import {AccessPackageTextInputQuestionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageTextInputQuestionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageTextInputQuestionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageTextInputQuestionCollectionResponse();
}
