import {RubricQualityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRubricQualityFromDiscriminatorValue(parseNode: ParseNode | undefined) : RubricQualityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RubricQualityImpl();
}
