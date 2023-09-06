import { deserializeIntoNominalPostRequestBody } from './deserializeIntoNominalPostRequestBody';
import { type NominalPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createNominalPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNominalPostRequestBody;
}
