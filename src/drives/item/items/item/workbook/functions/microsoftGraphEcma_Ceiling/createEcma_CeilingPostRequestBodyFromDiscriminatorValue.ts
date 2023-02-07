import {Ecma_CeilingPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEcma_CeilingPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Ecma_CeilingPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Ecma_CeilingPostRequestBody();
}
