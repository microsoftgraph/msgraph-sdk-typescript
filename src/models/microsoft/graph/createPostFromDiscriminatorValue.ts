import {Post} from './post';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPostFromDiscriminatorValue(parseNode: ParseNode | undefined) : Post {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Post();
}
