import {AdditionalAccessResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdditionalAccessResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AdditionalAccessResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AdditionalAccessResponse();
}
