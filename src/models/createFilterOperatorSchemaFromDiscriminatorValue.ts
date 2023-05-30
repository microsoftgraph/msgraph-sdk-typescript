import {deserializeIntoFilterOperatorSchema} from './deserializeIntoFilterOperatorSchema';
import {FilterOperatorSchema} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFilterOperatorSchemaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFilterOperatorSchema;
}
