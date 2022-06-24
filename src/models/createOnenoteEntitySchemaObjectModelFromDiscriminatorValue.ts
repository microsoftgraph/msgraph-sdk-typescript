import {OnenoteEntitySchemaObjectModelImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteEntitySchemaObjectModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteEntitySchemaObjectModelImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteEntitySchemaObjectModelImpl();
}
