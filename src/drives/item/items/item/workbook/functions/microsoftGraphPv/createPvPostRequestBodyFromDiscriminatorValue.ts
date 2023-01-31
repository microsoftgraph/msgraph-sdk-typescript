import {PvPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PvPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PvPostRequestBody();
}
