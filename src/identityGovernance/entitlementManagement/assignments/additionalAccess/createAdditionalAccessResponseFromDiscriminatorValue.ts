import {deserializeIntoAdditionalAccessResponse} from './deserializeIntoAdditionalAccessResponse';
import {AdditionalAccessResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdditionalAccessResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAdditionalAccessResponse;
}
