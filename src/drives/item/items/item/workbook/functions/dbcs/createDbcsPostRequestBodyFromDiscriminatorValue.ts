import {DbcsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDbcsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DbcsPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DbcsPostRequestBody();
}
