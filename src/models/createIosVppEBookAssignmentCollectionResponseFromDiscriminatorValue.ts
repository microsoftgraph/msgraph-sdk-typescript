import {IosVppEBookAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosVppEBookAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosVppEBookAssignmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosVppEBookAssignmentCollectionResponse();
}
