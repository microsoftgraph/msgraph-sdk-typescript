import {deserializeIntoAccessPackageQuestionCollectionResponse} from './deserializeIntoAccessPackageQuestionCollectionResponse';
import {AccessPackageQuestionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageQuestionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageQuestionCollectionResponse;
}
