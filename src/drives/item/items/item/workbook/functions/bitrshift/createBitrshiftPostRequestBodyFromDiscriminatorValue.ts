import { deserializeIntoBitrshiftPostRequestBody } from './deserializeIntoBitrshiftPostRequestBody';
import { type BitrshiftPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBitrshiftPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBitrshiftPostRequestBody;
}
