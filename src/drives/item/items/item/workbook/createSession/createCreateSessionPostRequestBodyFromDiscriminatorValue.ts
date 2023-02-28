import {CreateSessionPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateSessionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateSessionPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateSessionPostRequestBody();
}
