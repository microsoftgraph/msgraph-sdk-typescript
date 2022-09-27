import {ProcessCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProcessCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProcessCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProcessCollectionResponse();
}
