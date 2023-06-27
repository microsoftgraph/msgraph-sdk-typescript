import {deserializeIntoParameter} from './deserializeIntoParameter';
import {Parameter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParameterFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoParameter;
}
