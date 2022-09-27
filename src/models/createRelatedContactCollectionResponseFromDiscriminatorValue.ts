import {RelatedContactCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRelatedContactCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RelatedContactCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RelatedContactCollectionResponse();
}
