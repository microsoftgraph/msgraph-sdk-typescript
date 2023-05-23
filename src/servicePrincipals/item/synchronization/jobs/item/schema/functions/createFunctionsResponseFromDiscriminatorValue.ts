import {deserializeIntoFunctionsResponse} from './deserializeIntoFunctionsResponse';
import {FunctionsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFunctionsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFunctionsResponse;
}
