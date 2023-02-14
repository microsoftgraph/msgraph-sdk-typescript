import {CreateUploadSessionPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateUploadSessionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateUploadSessionPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateUploadSessionPostRequestBody();
}
