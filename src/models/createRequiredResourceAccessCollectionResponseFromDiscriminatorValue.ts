import {RequiredResourceAccessCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRequiredResourceAccessCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RequiredResourceAccessCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RequiredResourceAccessCollectionResponse();
}
