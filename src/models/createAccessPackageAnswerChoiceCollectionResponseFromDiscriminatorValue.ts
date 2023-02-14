import {AccessPackageAnswerChoiceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAnswerChoiceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAnswerChoiceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAnswerChoiceCollectionResponse();
}
