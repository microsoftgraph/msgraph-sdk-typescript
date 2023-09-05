import { deserializeIntoIso_CeilingPostRequestBody } from './deserializeIntoIso_CeilingPostRequestBody';
import { type Iso_CeilingPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIso_CeilingPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIso_CeilingPostRequestBody;
}
