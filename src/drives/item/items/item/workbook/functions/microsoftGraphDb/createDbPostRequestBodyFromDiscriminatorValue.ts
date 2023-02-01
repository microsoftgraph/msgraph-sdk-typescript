import {DbPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDbPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DbPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DbPostRequestBody();
}
