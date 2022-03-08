import {ImportRequestBody} from './importRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImportRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImportRequestBody();
}
