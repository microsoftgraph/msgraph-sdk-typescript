import {AcoshPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAcoshPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AcoshPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AcoshPostRequestBody();
}
