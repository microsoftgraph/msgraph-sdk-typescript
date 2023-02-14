import {AccessPackageMultipleChoiceQuestionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageMultipleChoiceQuestionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageMultipleChoiceQuestionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageMultipleChoiceQuestionCollectionResponse();
}
