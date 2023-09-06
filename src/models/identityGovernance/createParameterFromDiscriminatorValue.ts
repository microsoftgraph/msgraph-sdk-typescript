import { deserializeIntoParameter } from './deserializeIntoParameter';
import { type Parameter } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createParameterFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoParameter;
}
