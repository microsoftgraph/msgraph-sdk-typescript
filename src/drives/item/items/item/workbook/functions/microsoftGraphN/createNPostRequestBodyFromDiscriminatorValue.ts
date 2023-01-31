import {NPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : NPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NPostRequestBody();
}
