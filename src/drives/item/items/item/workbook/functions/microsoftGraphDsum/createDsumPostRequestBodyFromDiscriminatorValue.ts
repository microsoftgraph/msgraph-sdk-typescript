import {DsumPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDsumPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DsumPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DsumPostRequestBody();
}
