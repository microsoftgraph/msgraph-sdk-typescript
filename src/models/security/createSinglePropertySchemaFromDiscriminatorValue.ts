import {deserializeIntoSinglePropertySchema} from './deserializeIntoSinglePropertySchema';
import {SinglePropertySchema} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSinglePropertySchemaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSinglePropertySchema;
}
