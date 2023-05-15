import {deserializeIntoWorkDay_IntlPostRequestBody} from './deserializeIntoWorkDay_IntlPostRequestBody';
import {WorkDay_IntlPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkDay_IntlPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkDay_IntlPostRequestBody;
}
