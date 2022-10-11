import {BaseDeltaFunctionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBaseDeltaFunctionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BaseDeltaFunctionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BaseDeltaFunctionResponse();
}
