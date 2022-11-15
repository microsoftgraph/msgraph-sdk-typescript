import {RubricLevelCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRubricLevelCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RubricLevelCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RubricLevelCollectionResponse();
}
