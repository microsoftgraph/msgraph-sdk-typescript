import {NpvPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNpvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : NpvPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NpvPostRequestBody();
}
