import {deserializeIntoNominalPostRequestBody} from './deserializeIntoNominalPostRequestBody';
import {NominalPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNominalPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNominalPostRequestBody;
}
