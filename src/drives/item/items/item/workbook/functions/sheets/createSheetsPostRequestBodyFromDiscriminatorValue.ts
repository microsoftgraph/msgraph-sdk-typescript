import {SheetsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSheetsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SheetsPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SheetsPostRequestBody();
}
