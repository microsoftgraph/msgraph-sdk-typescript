import {deserializeIntoSchema} from './deserializeIntoSchema';
import {Schema} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSchemaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSchema;
}
