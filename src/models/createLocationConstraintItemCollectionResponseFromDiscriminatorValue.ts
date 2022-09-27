import {LocationConstraintItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLocationConstraintItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LocationConstraintItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LocationConstraintItemCollectionResponse();
}
