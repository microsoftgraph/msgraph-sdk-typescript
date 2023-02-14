import {DegreesPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDegreesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DegreesPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DegreesPostRequestBody();
}
