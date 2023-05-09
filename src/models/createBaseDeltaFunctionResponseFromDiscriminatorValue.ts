import {deserializeIntoBaseDeltaFunctionResponse} from './deserializeIntoBaseDeltaFunctionResponse';
import {BaseDeltaFunctionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBaseDeltaFunctionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBaseDeltaFunctionResponse;
}
