import {deserializeIntoRubricLevel} from './deserializeIntoRubricLevel';
import {RubricLevel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRubricLevelFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRubricLevel;
}
