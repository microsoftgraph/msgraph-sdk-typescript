import {deserializeIntoEcma_CeilingPostRequestBody} from './deserializeIntoEcma_CeilingPostRequestBody';
import {Ecma_CeilingPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEcma_CeilingPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEcma_CeilingPostRequestBody;
}
