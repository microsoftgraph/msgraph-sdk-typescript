import {AllowedValueCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAllowedValueCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AllowedValueCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AllowedValueCollectionResponse();
}
