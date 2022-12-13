import {SinglePropertySchema} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSinglePropertySchemaFromDiscriminatorValue(parseNode: ParseNode | undefined) : SinglePropertySchema {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SinglePropertySchema();
}
