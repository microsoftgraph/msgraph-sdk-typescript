import {IosVppEBookCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosVppEBookCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosVppEBookCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosVppEBookCollectionResponse();
}
