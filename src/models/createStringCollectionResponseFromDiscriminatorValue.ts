import {StringCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStringCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : StringCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StringCollectionResponse();
}
