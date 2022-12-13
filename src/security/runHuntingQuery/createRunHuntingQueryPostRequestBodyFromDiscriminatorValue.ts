import {RunHuntingQueryPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRunHuntingQueryPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RunHuntingQueryPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RunHuntingQueryPostRequestBody();
}
