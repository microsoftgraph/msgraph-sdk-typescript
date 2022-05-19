import {ReferenceUpdateSchema} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReferenceUpdateSchemaFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReferenceUpdateSchema {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReferenceUpdateSchema();
}
