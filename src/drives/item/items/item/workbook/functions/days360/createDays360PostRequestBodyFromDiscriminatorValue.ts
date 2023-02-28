import {Days360PostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDays360PostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Days360PostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Days360PostRequestBody();
}
