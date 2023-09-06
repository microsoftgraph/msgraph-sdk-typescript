import { deserializeIntoRubricQualitySelectedColumnModel } from './deserializeIntoRubricQualitySelectedColumnModel';
import { type RubricQualitySelectedColumnModel } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRubricQualitySelectedColumnModelFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRubricQualitySelectedColumnModel;
}
