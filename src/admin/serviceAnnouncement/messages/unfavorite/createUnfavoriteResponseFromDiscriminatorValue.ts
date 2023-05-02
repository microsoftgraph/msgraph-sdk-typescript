import {deserializeIntoUnfavoriteResponse} from './deserializeIntoUnfavoriteResponse';
import {UnfavoriteResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnfavoriteResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnfavoriteResponse;
}
