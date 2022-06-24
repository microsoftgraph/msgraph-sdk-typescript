import {RubricQualitySelectedColumnModelImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRubricQualitySelectedColumnModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : RubricQualitySelectedColumnModelImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RubricQualitySelectedColumnModelImpl();
}
