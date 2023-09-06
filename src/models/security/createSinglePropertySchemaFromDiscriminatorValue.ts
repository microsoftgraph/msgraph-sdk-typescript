import { deserializeIntoSinglePropertySchema } from './deserializeIntoSinglePropertySchema';
import { type SinglePropertySchema } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSinglePropertySchemaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSinglePropertySchema;
}
