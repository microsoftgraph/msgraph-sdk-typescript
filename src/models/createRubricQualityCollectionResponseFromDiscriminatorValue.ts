import {RubricQualityCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRubricQualityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RubricQualityCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RubricQualityCollectionResponse();
}
