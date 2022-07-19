import {RubricQualitySelectedColumnModel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRubricQualitySelectedColumnModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : RubricQualitySelectedColumnModel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RubricQualitySelectedColumnModel();
}
