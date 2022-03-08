import {OnenoteSectionCollectionResponse} from './onenoteSectionCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteSectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteSectionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteSectionCollectionResponse();
}
