import {RubricQualitySelectedColumnModelCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRubricQualitySelectedColumnModelCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RubricQualitySelectedColumnModelCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RubricQualitySelectedColumnModelCollectionResponse();
}
