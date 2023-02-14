import {AccessPackageAnswerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageAnswerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageAnswerCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageAnswerCollectionResponse();
}
