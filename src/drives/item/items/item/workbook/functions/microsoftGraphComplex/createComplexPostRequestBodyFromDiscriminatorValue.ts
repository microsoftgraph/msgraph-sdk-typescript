import {ComplexPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createComplexPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ComplexPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ComplexPostRequestBody();
}
