import {WorkDay_IntlPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkDay_IntlPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkDay_IntlPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkDay_IntlPostRequestBody();
}
